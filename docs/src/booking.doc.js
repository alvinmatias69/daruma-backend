/**
 * @api {post} /booking Book a new room
 * @apiGroup Booking
 *
 * @apiParam {String}   patient_id    Patient identity number
 * @apiParam {String}   name          Patient name
 * @apiParam {String}   phone         Patient phone number
 * @apiParam {String}   address       Patient address
 * @apiParam {String}   booking_date  Date of the booking (YYYY/mm/dd)
 * @apiParam {Number}   class_id      ID of room class
 * @apiParam {Number}   hospital_id   ID of hospital
 *
 * @apiSuccess {Boolean}  status      Booking status
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true
 *    }
 *
 * @apiErrorExample {json} Field(s) not completed
 *    HTTP/1.1 400 Invalid
 *    {
 *      "error": "Fields are required"
 *    }
 *
 */
