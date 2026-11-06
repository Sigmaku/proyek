import type { ReactNode } from "react";
import { Table } from "@heroui/react";
import {
  FlexRender,
  createColumnHelper,
  tableFeatures,
  useTable,
  type ColumnDef,
  type RowData,
} from "@tanstack/react-table";

// Fitur TanStack Table yang dipakai. Masih kosong (rangka).
// Nanti tinggal tambah di sini, misal: rowSortingFeature, rowPaginationFeature, dst.
const features = tableFeatures({});

export type DataTableFeatures = typeof features;
export type DataTableColumn<TData extends RowData> = ColumnDef<DataTableFeatures, TData>;

// Helper buat bikin kolom di halaman: createDataTableColumnHelper<Attendance>()
export const createDataTableColumnHelper = <TData extends RowData>() =>
  createColumnHelper<DataTableFeatures, TData>();

export interface DataTableProps<TData extends RowData> {
  columns: DataTableColumn<TData>[];
  data: TData[];
  ariaLabel: string;
  emptyMessage?: ReactNode;
  className?: string;
}

export const DataTable = <TData extends RowData>({
  columns,
  data,
  ariaLabel,
  emptyMessage = "Tidak ada data",
  className,
}: DataTableProps<TData>) => {
  const table = useTable({ features, columns, data });

  return (
    <Table className={className}>
      <Table.ScrollContainer>
        <Table.Content aria-label={ariaLabel}>
          <Table.Header>
            {table.getHeaderGroups().flatMap((headerGroup) =>
              headerGroup.headers.map((header, index) => (
                <Table.Column key={header.id} id={header.id} isRowHeader={index === 0}>
                  {header.isPlaceholder ? null : <FlexRender header={header} />}
                </Table.Column>
              )),
            )}
          </Table.Header>

          <Table.Body renderEmptyState={() => <div className="py-8 text-center">{emptyMessage}</div>}>
            {table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id} id={row.id}>
                {row.getAllCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    <FlexRender cell={cell} />
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};