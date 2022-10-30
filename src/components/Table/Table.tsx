import React from 'react';
import './Table.scss';
import {TableProps} from "./types";

const Table = ({data}: TableProps) => {
    return (
        <>
            {data?.countries.length > 0 ? (
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Code</th>
                            <th>Country</th>
                        </tr>
                        {data?.countries.map((item: any) => (
                            <tr key={item?.code} data-testid="table-item">
                                <td>{item?.code}</td>
                                <td>{item?.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="search-text">Nothing found, edit your request</p>
            )}
        </>
    );
};

export default Table;