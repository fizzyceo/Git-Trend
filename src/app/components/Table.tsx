'use client'

import { ThemeProvider, createTheme } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useTheme } from "next-themes";
import { FC } from "react";

const colums: GridColDef[] = [
  {
    field: "col1",
    headerName: "API Key",
    width: 400,
    renderHeader(params) {
      return <strong className="truncate">{params.colDef.headerName}</strong>;
    },
  },
  {
    field: "col2",
    headerName: "path",
    width: 250,
  },
  {
    field: "col3",
    headerName: "Recency",
    width: 250,
  },
  {
    field: "col4",
    headerName: "duration",
    width: 250,
  },
  {
    field: "col5",
    headerName: "status",
    width: 250,
  },
];

interface TableProps {
  userRequests: {
    timestamp: string;
    id: string;
    method: string;
    path: string;
    status: number;
    duration: number;
    usedApiKey: string;
    apiKeyId: string;
  }[];
}

const Table: FC<TableProps> = ({ userRequests }) => {
  const {theme: ApplicationTheme}  = useTheme()
  const theme = createTheme({palette:{
    mode: ApplicationTheme ==='light' ? 'light': 'dark'
  }})

  const rows = userRequests.map((request) =>({

    id:request.id,
    col1:request.usedApiKey,
    col2:request.path,
    col3:`${request.timestamp} ago`,
    col4:`${request.duration} ms`,
    col5: request.status

  })) 
  return <ThemeProvider theme={theme}>
    <DataGrid
    columns={colums}
    rows={rows}
    className={`${ApplicationTheme==='light'?'bg-white':'bg-[#496e7b]'} `}
    pageSizeOptions={[5]}
    disableRowSelectionOnClick
    autoHeight
    />
  </ThemeProvider>;
};

export default Table;
