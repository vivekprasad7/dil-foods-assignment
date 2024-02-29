import MOCK_DATA from "../mock-data/data.json"
import { dataReducer, initialData } from "../reducer/dataReducer"

describe("testing data reducer", () => {

   it("should handle FETCH_ORDER_ITEMS", () => {
    const action = {
        type:'FETCH_ORDER_ITEMS',
        payload: MOCK_DATA
    }

    const updatedState = dataReducer(initialData, action)

    expect(updatedState).toEqual({
        ...initialData,
        orderItems: action.payload
    })
   })

   it("should handle FETCH_BY_PACKAGE_TYPEID", () => {
    const action = {
        type:"FETCH_BY_PACKAGE_TYPEID",
        payload:7
    }
    const updatedState = dataReducer(initialData, action)
    expect(updatedState).toEqual({
        ...initialData,
        packageTypeID: 7
    })
   })

   it("should handle SORT_BY_FIELD", () => {
    const initialData = {
        orderItems:MOCK_DATA,
        packageTypeID:1,
        groupByOrderID:"",
        groupByUserID:""
    }
    const action = {
        type:"SORT_BY_FIELD",
        payload:"OrderID"
    }
    const sortedItems = [...initialData.orderItems].sort((a,b) => a[action.payload] - b[action.payload])

    const updatedState = dataReducer(initialData, action)


    expect(updatedState).toEqual({
        ...initialData,
        orderItems:sortedItems
    })
   })

   it("should handle FILTER_BY_QUANTITY", () => {
    const initialData = {
        orderItems:MOCK_DATA,
        packageTypeID:1,
        groupByOrderID:"",
        groupByUserID:""
    }
    const action = {
        type:"FILTER_BY_QUANTITY",
        payload:90
    }

    const filterItems = initialData?.orderItems.filter((item) => item.Quantity === action.payload)

    const updatedState = dataReducer(initialData, action)

    expect(updatedState).toEqual({
        ...initialData,
        orderItems:filterItems
    })

   })


})