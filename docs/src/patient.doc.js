/**
 * @api {post} /patient Create new patient
 * @apiGroup Patient
 *
 * @apiParam {String}   id        Patient identity number
 * @apiParam {String}   name      Patient name
 * @apiParam {String}   email     Patient email
 * @apiParam {String}   password  Patient password
 * @apiParam {String}   phone     Patient phone
 * @apiParam {String}   address   Patient address
 *
 * @apiSuccess {Boolean} success  Success creation
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true
 *    }
 *
 * @apiErrorExample {json} Field(s) not complete
 *    HTTP/1.1 400 Invalid
 *    {
 *      "error": "Fields are required"
 *    }
 *
 * @apiErrorExample {json} Already exist
 *    HTTP/1.1 409 Conflict
 *    {
 *      "error": "Email already exist"
 *    }
 */

/**
 * @api {post} /patient/login Login patient
 * @apiGroup Patient
 *
 * @apiParam {String}   email     Patient email
 * @apiParam {String}   password  Patient password
 *
 * @apiSuccess {String} id      Patient id
 * @apiSuccess {String} name    Patient name
 * @apiSuccess {String} email   Patient email
 * @apiSuccess {String} address Patient address
 * @apiSuccess {String} phone   Patient phone
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": "1301144048",
 *      "name": "mat",
 *      "email": "mat@proofn.com",
 *      "address": "jl. telekomunikasi nomor 1",
 *      "phone": "08123456"
 *    }
 *
 * @apiErrorExample {json} Field(s) not complete
 *    HTTP/1.1 400 Invalid
 *    {
 *      "error": "Fields are required"
 *    }
 *
 * @apiErrorExample {json} Email not found
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Email is not recognized"
 *    }
 *
 * @apiErrorExample {json} Wrong password
 *    HTTP/1.1 401 Unauthorized
 *    {
 *      "error": "Wrong password"
 *    }
 */
