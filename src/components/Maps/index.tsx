"use client"
export default function MapView() {
  return (
    
<section className="text-gray-600 body-font relative w-[100%] h-[40vh] mt-12 overflow-hidden">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" title="map"  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" />
  </div>
 
</section>
  )
}
