import { TableHead, TableRow } from '@mui/material'
import React from 'react'



export default function TableHeading({StyledTableCell}) {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>Roll-No</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Subject</StyledTableCell>
                <StyledTableCell align="right">Marks</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
        </TableHead>
    )
}
