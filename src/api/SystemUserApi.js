import {
	request
} from "./Request.js"

// 增加系统用户
export function add(data, callback) {
	request("post", "/systemUser/add", data, callback);
}

// 根据ID更新系统用户
export function modify(data, callback) {
	request("put", "/systemUser/modifyById", data, callback);
}

// 获取当前登录用户用户
export function getCurrent(callback) {
	request("get", "/systemUser/getCurrent", null, callback);
}

// 分页获取当前用户
export function list(data, callback) {
	request("get", "/systemUser/list", data, callback);
}

// 根据ID获取系统用户
export function getById(data, callback) {
	request("get", "/systemUser/getById", data, callback);
}

// 根据ID删除系统用户
export function deleteById(data, callback) {
	request("get", "/systemUser/deleteById", data, callback);
}