import { DataTable, createDataTableColumnHelper } from "../common/DataTable"

interface Attendance {
  id: number;
  name: string;
  date: string;
  status: "Hadir" | "Izin" | "Alpa";
}

const columnHelper = createDataTableColumnHelper<Attendance>();

const data: Attendance[] = [
  { id: 1, name: "Budi", date: "2026-11-06", status: "Hadir" },
  { id: 2, name: "Sari", date: "2026-11-06", status: "Izin" },
];

// Taruh di LUAR komponen supaya referensinya stabil
const columns = columnHelper.columns([
  columnHelper.accessor("name", { header: "Nama" }),
  columnHelper.accessor("date", { header: "Tanggal" }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  }),
  columnHelper.display({
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => <button onClick={() => console.log(row.original.id)}>Edit</button>,
  }),
]);

export default function AttendancePage() {
  return <DataTable columns={columns} data={data} ariaLabel="Tabel absensi" />;
}