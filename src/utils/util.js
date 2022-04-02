/**
 * 工具集
 */

/**
 * 字符串是否为空
 * @param obj
 * @returns {boolean}
 */
export function isNotEmpty(obj) {
    if (typeof obj !== 'undefined' && obj != null || obj !== '') {
        return true;
    } else {
        return false;
    }
}
