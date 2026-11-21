"use client";

import * as React from "react";
import { toast } from "sonner";
import {
  Plus,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { StatusPill } from "@/components/ui/status-pill";
import { Avatar } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/modal";
import { MOCK_ASSETS } from "@/lib/mock-data";
import { Asset, AssetCategory } from "@/lib/types";
import { useLanguage } from "@/context/language-context";

export default function AssetsPage() {
  const { t, language } = useLanguage();
  const [assets, setAssets] = React.useState<Asset[]>(MOCK_ASSETS);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState<string>("all");
  const [modalOpen, setModalOpen] = React.useState(false);

  // New Asset form state
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState<AssetCategory>("Workstation");
  const [model, setModel] = React.useState("");
  const [serial, setSerial] = React.useState("");
  const [cost, setCost] = React.useState("2499");

  const filteredAssets = assets.filter((asset) => {
    const matchesSearch =
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.assetTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.serialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" ? true : asset.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const totalValue = assets.reduce((sum, a) => sum + a.cost, 0);
  const activeCount = assets.filter((a) => a.status === "active").length;
  const inStockCount = assets.filter((a) => a.status === "in_stock").length;

  const handleRegisterAsset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error(language === "id" ? "Mohon masukkan deskripsi aset" : "Please enter asset description");
      return;
    }

    const newTag = `AST-${Math.floor(8100 + Math.random() * 900)}`;
    const newAsset: Asset = {
      id: `ast-${Date.now()}`,
      assetTag: newTag,
      name,
      category,
      model: model || "Standard Enterprise Spec",
      serialNumber: serial || `SN-${Math.floor(100000 + Math.random() * 900000)}`,
      status: "in_stock",
      assignedTo: null,
      department: "IT Depot Inventory",
      purchaseDate: new Date().toISOString().split("T")[0],
      warrantyExpires: "2027-11-17",
      cost: parseFloat(cost) || 1200,
      location: "San Francisco IT Vault",
    };

    setAssets((prev) => [newAsset, ...prev]);
    toast.success(
      language === "id"
        ? `Aset ${newTag} berhasil didaftarkan ke armada`
        : `Asset ${newTag} successfully enrolled in fleet`
    );
    setName("");
    setModel("");
    setSerial("");
    setModalOpen(false);
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-neutral-200/80">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
            {t.assets.title}
          </h1>
          <p className="text-xs text-neutral-500 mt-0.5">
            {t.assets.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => setModalOpen(true)}
            size="sm"
            className="gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>{t.assets.registerBtn}</span>
          </Button>
        </div>
      </div>

      {/* Fleet KPI Metric Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-white">
          <CardContent className="p-4">
            <span className="text-xs text-neutral-500 font-medium">{t.assets.totalValuation}</span>
            <div className="mt-1 text-2xl font-bold text-neutral-900 tabular-nums">
              ${totalValue.toLocaleString()}
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              {language === "id" ? "Nilai kapitalisasi aset aktif" : "Active asset capitalized value"}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4">
            <span className="text-xs text-neutral-500 font-medium">{t.assets.activeProduction}</span>
            <div className="mt-1 text-2xl font-bold text-neutral-900 tabular-nums">
              {activeCount} {language === "id" ? "perangkat" : "devices"}
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              {language === "id" ? "Digunakan oleh staf terverifikasi" : "Assigned to verified personnel"}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-4">
            <span className="text-xs text-neutral-500 font-medium">{t.assets.readyStock}</span>
            <div className="mt-1 text-2xl font-bold text-emerald-600 tabular-nums">
              {inStockCount} {language === "id" ? "unit" : "units"}
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              {language === "id" ? "Tersedia untuk orientasi karyawan baru" : "Available for immediate onboarding"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-lg border border-neutral-200/90 shadow-subtle">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.assets.searchPlaceholder}
            className="pl-8 h-8"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full sm:w-auto h-8 rounded-md border border-neutral-200/90 bg-white px-2.5 text-xs text-neutral-700 focus:outline-none focus:border-blue-500"
        >
          <option value="all">{t.assets.allCategories}</option>
          <option value="Workstation">{language === "id" ? "Laptop & Workstation" : "Workstations & Laptops"}</option>
          <option value="Network Infrastructure">{language === "id" ? "Infrastruktur Jaringan" : "Network Infrastructure"}</option>
          <option value="Security Key">{language === "id" ? "Kunci Keamanan MFA" : "Hardware MFA Keys"}</option>
          <option value="SaaS License">{language === "id" ? "Lisensi SaaS Perusahaan" : "Enterprise SaaS Pools"}</option>
        </select>
      </div>

      {/* Assets Inventory Table */}
      <Card className="bg-white">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">{t.assets.colTag}</TableHead>
                <TableHead>{t.assets.colModel}</TableHead>
                <TableHead className="w-[130px]">{t.assets.colCategory}</TableHead>
                <TableHead className="w-[120px]">{t.assets.colStatus}</TableHead>
                <TableHead className="w-[160px]">{t.assets.colCustodian}</TableHead>
                <TableHead className="w-[120px]">{t.assets.colWarranty}</TableHead>
                <TableHead className="w-[90px] text-right">{t.assets.colValue}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAssets.map((asset) => (
                <TableRow key={asset.id} className="group">
                  <TableCell className="font-mono text-xs font-semibold text-blue-600">
                    {asset.assetTag}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-neutral-900">
                      {asset.name}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                      SN: {asset.serialNumber} • Model: {asset.model}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                      {asset.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <StatusPill type="assetStatus" value={asset.status} />
                  </TableCell>
                  <TableCell>
                    {asset.assignedTo ? (
                      <div className="flex items-center gap-2">
                        <Avatar
                          src={asset.assignedTo.avatar}
                          name={asset.assignedTo.name}
                          size="xs"
                        />
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-neutral-800 truncate">
                            {asset.assignedTo.name}
                          </div>
                          <div className="text-[10px] text-neutral-400 truncate">
                            {asset.department}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <span className="text-[11px] text-neutral-400 italic">
                        {t.assets.inStockLocation}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-[11px] text-neutral-500 font-mono">
                    {asset.warrantyExpires}
                  </TableCell>
                  <TableCell className="text-right text-xs font-semibold text-neutral-900 tabular-nums">
                    ${asset.cost.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Register Asset Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t.assets.modalTitle}</DialogTitle>
            <DialogDescription>{t.assets.modalDesc}</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleRegisterAsset} className="space-y-4 pt-1">
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-neutral-700">
                {t.assets.modalName} <span className="text-rose-500">*</span>
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. MacBook Pro 14-inch M3 Pro (36GB)"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-neutral-700">
                  {t.common.category}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as AssetCategory)}
                  className="w-full h-8 rounded-md border border-neutral-200/90 bg-white px-2.5 text-xs text-neutral-800 focus:outline-none focus:border-blue-500"
                >
                  <option value="Workstation">Workstation</option>
                  <option value="Network Infrastructure">Network Infrastructure</option>
                  <option value="Security Key">Security Key</option>
                  <option value="SaaS License">SaaS License</option>
                  <option value="Mobile Device">Mobile Device</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-neutral-700">
                  {t.assets.modalCost}
                </label>
                <Input
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  type="number"
                  placeholder="2499"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-neutral-700">
                  {t.assets.modalModel}
                </label>
                <Input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g. Apple A2992"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-neutral-700">
                  {t.assets.modalSerial}
                </label>
                <Input
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  placeholder="e.g. C02G901..."
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-neutral-100">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setModalOpen(false)}
              >
                {t.common.cancel}
              </Button>
              <Button type="submit" size="sm">
                {t.assets.modalSubmit}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
