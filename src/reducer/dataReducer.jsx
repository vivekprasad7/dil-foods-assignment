export const initialData = {
    orderItems:[],
    packageTypeID:1,
    groupByOrderID:"",
    groupByUserID:""
}

export const dataReducer = (state, action) => {
    switch(action.type){
        case"FETCH_ORDER_ITEMS":{
            return {...state, orderItems: action.payload}
        }
        case"FETCH_BY_PACKAGE_TYPEID":{
            return {...state, packageTypeID: +action.payload}
        }
        case"SORT_BY_FIELD":{
            console.log("new reducer called")
            // const {sortBy} = action.payload
            const sortedItems = [...state.orderItems].sort((a,b) => {
                if(a[action.payload] < b[action.payload]) return -1;
                if(a[action.payload] > b[action.payload]) return 1;
                return 0;
            })

            return {...state, orderItems: sortedItems}
        }
        case"FILTER_BY_QUANTITY":{
            console.log("Filter called")
            const filterItems = [...state.orderItems].filter((item) => item.Quantity === +action.payload)
            return {...state, orderItems: filterItems}
        }

    }
}
