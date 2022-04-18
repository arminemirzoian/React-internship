import Paper from "@mui/material/Paper";
import VirtualizedTable from "./TableItem";
import useFetch from "../hooks/useFetch";
import {tableUrl} from "../API/Api";
import * as React from "react";

export default function Table() {
    const [data] = useFetch(tableUrl);

    return (
        <>
            {data &&
                <Paper style={{height: 500, width: "100%"}}>
                    <VirtualizedTable
                        rowCount={data.length}
                        rowGetter={({index}) => data[index]}
                        columns={Object.keys(data[0]).map((cell) => ({
                            width: 1000,
                            label: [cell],
                            dataKey: [cell],
                        }))
                        }
                    />
                </Paper>
            }
        </>
    );
}