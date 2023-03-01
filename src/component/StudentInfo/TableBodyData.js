import { Button, IconButton, TableBody } from '@mui/material';
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function TableBodyData({ StyledTableRow, StyledTableCell, rows, remove,  handleOpen }) {

    return (
        <TableBody>
            {rows?.map((row, index) => (
                <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                        {row.rollno}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                    <StyledTableCell align="right">{row.sub}</StyledTableCell>
                    <StyledTableCell align="right">{row.marks}</StyledTableCell>
                    <StyledTableCell align="right">
                        <IconButton aria-label="edit" color="primary" onClick={() => handleOpen(index)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" color="primary" onClick={() => remove(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>
    )
}
