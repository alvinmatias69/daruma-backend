/**
 * @api {get} /hospital List all hospital
 * @apiGroup Hospital
 *
 * @apiParam {json}   where={}            Waterline based WHERE query
 * @apiParam {json}   whereLike={}        Waterline based WHERE LIKE query
 * @apiParam {String} format=minimal      Response format (minimal / full) to return
 * @apiParam {Number} limit=30 Limitting  response items
 * @apiParam {Number} skip=0 Skipping     response
 *
 * @apiSuccess {Object[]} hospitals                       Hospital list
 * @apiSuccess {Number}   hospitals.id                    ID of hospital
 * @apiSuccess {String}   hospitals.name                  Hospital name
 * @apiSuccess {String}   hospitals.address               Hospital address
 * @apiSuccess {String}   hospitals.phone                 Hospital phone number
 * @apiSuccess {String}   hospitals.longitude             Hospital longitude position
 * @apiSuccess {String}   hospitals.latitude              Hospital latitude position
 * @apiSuccess {Number[]} hospitals.available_class       Class available on hospital
 * @apiSuccess {Number}   hospitals.available_room_count  Total room available on the hospital
 * @apiSuccess {Number}   hospitals.min_price             Minimum price on hospital
 * @apiSuccess {Number}   hospitals.max_price             Maximum price on hospital
 * @apiSuccess {Object[]} hospitals.rooms                 Rooms available on hospital. Only returned on full format
 * @apiSuccess {Number}   hospitals.rooms.id                Class id
 * @apiSuccess {String}   hospitals.rooms.name              Class name
 * @apiSuccess {Number}   hospitals.rooms.price             Room price
 * @apiSuccess {Number}   hospitals.rooms.available_count   Total rooms available
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "name": "mat",
 *      "address": "puri",
 *      "phone": "081234",
 *      "longitude": "12.12",
 *      "latitude": "41.15",
 *      "available_class": [
 *          1,
 *          2,
 *          3,
 *          4,
 *          5
 *      ],
 *      "available_room_count": 123,
 *      "min_price": 200,
 *      "max_price": 600,
 *      "rooms": [
 *          {
 *              "id": 1,
 *              "name": "Kelas I",
 *              "price": 200,
 *              "available_count": 24
 *          },
 *          {
 *              "id": 2,
 *              "name": "Kelas II",
 *              "price": 400,
 *              "available_count": 24
 *          },
 *          {
 *              "id": 3,
 *              "name": "Kelas III",
 *              "price": 600,
 *              "available_count": 25
 *          },
 *          {
 *              "id": 4,
 *              "name": "VIP",
 *              "price": 500,
 *              "available_count": 25
 *          },
 *          {
 *              "id": 5,
 *              "name": "VVIP",
 *              "price": 500,
 *              "available_count": 25
 *          }
 *      ]
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 400 Invalid where or whereLike query
 */

/**
 * @api {get} /hospital/:id Get detail of a hospital
 * @apiGroup Hospital
 *
 * @apiParam {Number} id  Hospital ID
 *
 * @apiSuccess {Number}   id                    ID of hospital
 * @apiSuccess {String}   name                  Hospital name
 * @apiSuccess {String}   address               Hospital address
 * @apiSuccess {String}   phone                 Hospital phone number
 * @apiSuccess {String}   longitude             Hospital longitude position
 * @apiSuccess {String}   latitude              Hospital latitude position
 * @apiSuccess {Number[]} available_class       Class available on hospital
 * @apiSuccess {Number}   available_room_count  Total room available on the hospital
 * @apiSuccess {Number}   min_price             Minimum price on hospital
 * @apiSuccess {Number}   max_price             Maximum price on hospital
 * @apiSuccess {Object[]} rooms                 Rooms available on hospital. Only returned on full format
 * @apiSuccess {Number}   rooms.id                Class id
 * @apiSuccess {String}   rooms.name              Class name
 * @apiSuccess {Number}   rooms.price             Room price
 * @apiSuccess {Number}   rooms.available_count   Total rooms available
 * 
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "name": "mat",
 *      "address": "puri",
 *      "phone": "081234",
 *      "longitude": "12.12",
 *      "latitude": "41.15",
 *      "available_class": [
 *          1,
 *          2,
 *          3,
 *          4,
 *          5
 *      ],
 *      "available_room_count": 123,
 *      "min_price": 200,
 *      "max_price": 600,
 *      "rooms": [
 *          {
 *              "id": 1,
 *              "name": "Kelas I",
 *              "price": 200,
 *              "available_count": 24
 *          },
 *          {
 *              "id": 2,
 *              "name": "Kelas II",
 *              "price": 400,
 *              "available_count": 24
 *          },
 *          {
 *              "id": 3,
 *              "name": "Kelas III",
 *              "price": 600,
 *              "available_count": 25
 *          },
 *          {
 *              "id": 4,
 *              "name": "VIP",
 *              "price": 500,
 *              "available_count": 25
 *          },
 *          {
 *              "id": 5,
 *              "name": "VVIP",
 *              "price": 500,
 *              "available_count": 25
 *          }
 *      ]
 *    }
 */

/**
 * @api {get} /hospital/count Return total of listed hospital
 * @apiGroup Hospital
 *
 * @apiSuccess {Number} count Total listed hospital
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "count": 10
 *    }
 */
