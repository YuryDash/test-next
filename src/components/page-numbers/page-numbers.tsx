'use client'
import Pagination from '@mui/material/Pagination';
import {ChangeEvent, useState} from "react";

type Props = {
  count: number
  pagesCount?: number
  page: number
  onChange: (event: ChangeEvent<unknown>, value: number) => void
}

export const PageNumbers = ({count, pagesCount, page, onChange}:Props) => {

  const countPage = Math.ceil(count / (pagesCount ? pagesCount : 10))

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    onChange(event, value)
  };

  console.log('page: ' + page)
  return <Pagination count={countPage} page={page} onChange={handleChange} />;
}
