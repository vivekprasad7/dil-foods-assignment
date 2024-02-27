 const dashboardSlice = createSlice({
    name:"dashboard",
    initialState: {
        totalOrders:""
    },
    reducers:{
        dashboardReset: (state) => {
            totalOrders = ""
        }
    }
})

export default dashboardSlice.reducer;