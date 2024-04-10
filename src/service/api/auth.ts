import mockRequest from "@/request/index";

// app包管理安卓列表查询
export function QueryAppPackageManagement(data: any) {
  return mockRequest({
    url: "/api/AppPackageManagement/QueryAppPackageManagement",
    method: "post",
    data,
  });
}
// app包管理安卓列表新增
export function AddAppPackageManagement(data: any) {
  return mockRequest({
    url: "/api/AppPackageManagement/AddAppPackageManagement",
    method: "post",
    data,
  });
}

//查询官网下单总数
export function QueryOfficialWebsiteCustomerOrderCount(data: any) {
  return mockRequest({
    url: "/api/CustomerOrder/QueryOfficialWebsiteCustomerOrderCount",
    method: "post",
    data,
  });
}
//查询官网下单详情
export function QueryOfficialWebsiteCustomerOrderDetail(data: any) {
  return mockRequest({
    url: "/api/CustomerOrder/QueryOfficialWebsiteCustomerOrderDetail",
    method: "post",
    data,
  });
}
