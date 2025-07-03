export function FlightSchedule() {
  return (
    <div className="mx-4">
      <div className="grid grid-cols-2 gap-1">
        <div className=" bg-neutral-800 px-4 py-4 mt-1 flex items-center justify-between">
          <p className=" opacity-50">Scheduled</p>
          <p className="text-white text-sm">08:15</p>
        </div>
        <div className="bg-neutral-800 px-4 py-4 mt-1 flex items-center justify-between">
          <p className=" opacity-50">Actual</p>
          <p className="text-white text-sm">08:24</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mb-1 ">
        <div className="bg-neutral-800 px-4 py-4 mt-1 flex items-center justify-between rounded-bl-lg">
          <p className=" opacity-50">Scheduled</p>
          <p className="text-white text-sm">08:24</p>
        </div>
        <div className="bg-neutral-800 px-4 py-4 mt-1 flex items-center justify-between rounded-br-lg">
          <p className=" opacity-50">Estimated</p>
          <p className="text-white text-sm">13:23</p>
        </div>
      </div>
    </div>
  );
}
