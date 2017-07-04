import request from '../../utils/requests';

export async function getZones() {
  // try {
  //   // return await request.get('/collections/sg:master/objects?filter=zone:*');
  //
  // } catch (err) {
  //   throw new Error(err);
  // }

  return [
    {
      "type": "geojson",
      "id": "zone:central$central",
      "fields": {"open_threshold":13,"event_id":119,"delay":8,"close_threshold":15},
      "expires_in":null,
      "data":{"type":"Polygon"},
      "collection_id":"sg:master"
    },
    {
      "type":"geojson",
      "id":"zone:east$east",
      "fields":{"open_threshold":13,"event_id":70,"close_threshold":15},
      "expires_in":null,
      "data":{"type":"Polygon"},
      "collection_id":"sg:master"
    },
    {
      "type":"geojson",
      "id":"zone:east$far_east",
      "fields":{"open_threshold":13,"event_id":71,"close_threshold":15},
      "expires_in":null,
      "data":{"type":"Polygon"},
      "collection_id":"sg:master"
    },
    {"type":"geojson","id":"zone:singapore_west$btje","fields":{"open_threshold":13,"event_id":156,"close_threshold":15},"expires_in":null,"data":{"type":"Polygon"},"collection_id":"sg:master"},
    {"type":"geojson","id":"zone:singapore_west$bukitpanjang","fields":{"open_threshold":13,"event_id":75,"close_threshold":15},"expires_in":null,"data":{"type":"Polygon"},"collection_id":"sg:master"},
    {"type":"geojson","id":"zone:singapore_west$jurongwest","fields":{"open_threshold":13,"event_id":74,"close_threshold":15},"expires_in":null,"data":{"type":"Polygon"},"collection_id":"sg:master"},
    {"type":"geojson","id":"zone:singaporenorth$amk","fields":{"open_threshold":13,"event_id":77,"close_threshold":15},"expires_in":null,"data":{"type":"Polygon"},"collection_id":"sg:master"},
    {"type":"geojson","id":"zone:singaporenorth$hougangsengkang","fields":{"open_threshold":13,"event_id":78,"close_threshold":15},"expires_in":null,"data":{"type":"Polygon"},"collection_id":"sg:master"},
    {"type":"geojson","id":"zone:singaporenorth$north","fields":{"open_threshold":13,"event_id":76,"close_threshold":15},"expires_in":null,"data":{"type":"Polygon"},"collection_id":"sg:master"}];
}
