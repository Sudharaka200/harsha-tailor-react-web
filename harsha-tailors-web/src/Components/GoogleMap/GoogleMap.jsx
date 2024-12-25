function LocationMap() {
    return (
      <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.010779184976!2d79.9611474748234!3d7.008012992993395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f85f899715b3%3A0xf0a7e33e4c4ce65f!2sHarsha%20Tailors%20%26%20Textiles%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1735071352413!5m2!1sen!2slk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Harsha Tailors & Textiles Location"
        ></iframe>
      </div>
    );
  }
  
  export default LocationMap;
  