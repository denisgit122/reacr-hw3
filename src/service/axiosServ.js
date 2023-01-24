import axios from "axios";

import {baseURL} from "../const";

const axiosServ=axios.create({baseURL:baseURL})
export {axiosServ}

