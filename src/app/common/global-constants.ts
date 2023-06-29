export class GlobalConstants {
  /**
   * GLOBAL VARIBALES
   */

  /**
   * @{Geofence}
   */
  public static checkpoint_radius_inner: number = 10;

  // global varibale for meeting checkpoint radius and id
  //  50 meter geofence
  public static meeting_checkppoint_radius_outside: number = 50;
  public static meeting_checkppoint_id_outside: string = "500";
  // 10 meter geofence
  public static meeting_checkppoint_id_inner: string = "505";

  // global varibale for leaving checkpoint radius and id
  // 50 meters geofence
  public static leaving_checkppoint_radius_outside: number = 51;
  public static leaving_checkppoint_id_outside: string = "400";
  // 10 meters geofence

  public static leaving_checkppoint_id_inner: string = "405";

  // global variable for destination radius and id
  public static destination_radius: number = 12;
  public static destination_id: string = "300";
  // Normal navigational geofence

  public static navigational_radius: number = 60;
  public static navigational_leave_radius = 15

  // -----------------------------------------------------------//

  /**
   * custom markers for the app using AwesomeMarker library
   *
   */
  // start location marker on the map
  public static startMarker: Object = {};

  // destination location marker

  public static destinationMarker: Object = {};
  // meeting point marker
  public static meetingPointMarkerIcon: Object = {};
  // leaving point marker
  public static leavingPointMarkerIcon: Object = {};


}
