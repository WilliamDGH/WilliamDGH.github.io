const Map = () => {
  return (
    <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height={355}
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225555.14597140264!2d153.20421547872104!3d-27.954123049579618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911a472b5d60b7%3A0x302a35af3deaf70!2sGold%20Coast%20QLD!5e0!3m2!1sen!2sau!4v1687841645109!5m2!1sen!2sau"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          />
          <a href="https://fmovies-online.net">fmovies</a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
            }}
          />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
            }}
          />
        </div>
      </div>
      {/* Get your API here https://www.embedgooglemap.net */}
    </div>
  );
};
export default Map;
