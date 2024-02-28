export const initialData = {
    orderItems:[],
    packageTypeID:1,
    sortByOrderID:"",
    filterByQuantity:"",
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
        case"SORT_BY_ORDER_ID":{
            return {...state, sortByOrderID: action.payload}
        }
        case"FILTER_BY_QUANTITY":{
            return {...state, orderItems: action.payload}
        }

    }
}
