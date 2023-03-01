import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHeading from './TableHeading';
import TableBodyData from './TableBodyData';
import { useDispatch, useSelector } from 'react-redux';
import { dltStuData } from '../Redux Tookit/slice/crudOpration';
import PopupMemuEdit from './PopupMemuEdit';


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));



export default function TableData() {

    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => setOpen(false);
    const [editIndex, setEditIndex] = useState(0);

    const data = useSelector(y => y.crudData)
    const dispatch = useDispatch();

    const handleOpen = (index) => {
        setOpen(true)
        setEditIndex(index);
        
    };
    
    // console.log(data.notes[0]);
    
    const dltData = (index) => {
        dispatch(dltStuData(index))
    }

    
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHeading StyledTableCell={StyledTableCell} />
                    <TableBodyData StyledTableCell={StyledTableCell} StyledTableRow={StyledTableRow} rows={data.notes} remove={dltData} setOpen={setOpen} handleOpen={handleOpen} />
                </Table>
            </TableContainer>
            <PopupMemuEdit open={open} handleClose={handleClose} editIndex={editIndex}/>
        </>

    )
}
