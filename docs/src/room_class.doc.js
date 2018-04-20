/**
 * @api {get} /room_class List all class room available
 * @apiGroup RoomClass
 *
 * @apiSuccess {Object[]} room_classes    room_class list
 * @apiSuccess {Number} room_classes.id   id of room_class
 * @apiSuccess {String} room_classes.name name of the class
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "name" "VVIP"
 *    }]
 */
