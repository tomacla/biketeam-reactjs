import React, { FC, memo, useCallback, useMemo } from 'react';
import { Col, Pagination, Row } from 'react-bootstrap';
import styled from 'styled-components';

const CenteredCol = styled(Col)`
display:flex ;
justify-content: center;
`

interface MapButtonsProps {
  nbPages: number;
  page: number;
  setPage: (page: number) => void;
}

interface MapButtonsPropsResults {
  isLastPage: boolean;
  isFirstPage: boolean;
  handleFirstPageClick: () => void;
  handleLastPageClick: () => void;
  handlePrevPageClick: () => void;
  handleNextPageClick: () => void;
}

function useMapButtonsProps(page: number, nbPages: number, setPage: (page: number) => void): MapButtonsPropsResults {
  const handleFirstPageClick = useCallback(() => {
    setPage(0);
  }, [setPage])
  const handleLastPageClick = useCallback(() => {
    setPage(1);
  }, [setPage])
  const handlePrevPageClick = useCallback(() => {
    if (page !== 0) {
      setPage(page - 1);
    }
  }, [page, setPage])
  const handleNextPageClick = useCallback(() => {
    if (page !== nbPages - 1) {
      setPage(page + 1)
    }
  }, [nbPages, page, setPage])
  const isFirstPage = useMemo(() => page === 0, [page])
  const isLastPage = useMemo(() => page === nbPages - 1, [nbPages, page])
  return {
    isLastPage,
    isFirstPage,
    handleFirstPageClick,
    handleLastPageClick,
    handleNextPageClick,
    handlePrevPageClick
  }
}

const MapButtons: FC<MapButtonsProps> = (
  { nbPages, page, setPage }
) => {
  const {
    handleFirstPageClick,
    handleLastPageClick,
    handleNextPageClick,
    handlePrevPageClick,
    isFirstPage,
    isLastPage } = useMapButtonsProps(page, nbPages, setPage)
  return (
    <Row>
      <CenteredCol>
        <Pagination>
          <Pagination.First disabled={isFirstPage} onClick={handleFirstPageClick} />
          <Pagination.Prev disabled={isFirstPage} onClick={handlePrevPageClick} />
          <Pagination.Item disabled >{page}</Pagination.Item>
          <Pagination.Next disabled={isLastPage} onClick={handleNextPageClick} />
          <Pagination.Last disabled={isLastPage} onClick={handleLastPageClick} />
        </Pagination>
      </CenteredCol>
    </Row>
  )
}

export default memo(MapButtons);
