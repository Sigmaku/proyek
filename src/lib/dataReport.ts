interface ReportDataProps {
    id: string
    name: string
    timestamp: string
    notes?: string
}

export const reportData: ReportDataProps[] =[
    {
        id: "FE001",
        name: "Dyland Alexander",
        timestamp: "01-02-2026",
        notes: "Saya membuat beberapa fitur tambahan di aplikasi mobile RE-Stocks kita, seperti membuat DataTable barang yg masuk"
    },
    {
        id: "BE001",
        name: "Ren Agashima",
        timestamp: "14-05-2026",
        notes: "Saya membuat beberapa fitur tambahan di aplikasi mobile RE-Stocks kita, seperti membuat model dan Entity DataTable barang yg masuk"
    },
    {
        id: "BA001",
        name: "Dyland Alexander",
        timestamp: "21-09-2026",
        notes: "Saya mengembalikan semua dokumen dari client kita PT. Aselole bom, karena membatalkan perjanjian kontrak kesinambungan"
    },
]