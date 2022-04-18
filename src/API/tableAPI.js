import axios from "axios";

export function getTable() {
    return axios.get('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
}
