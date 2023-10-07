
const Stat = () => {
    return (
        <div className="stats shadow-md w-full mt-24">

            <div className="stat p-8 text-center space-y-2">
                <div className="stat-title text-xl font-medium">Total Events</div>
                <div className="stat-value text-rose-500 text-5xl">300+</div>
                <div className="stat-desc text-lg font-medium">Clients Favorite</div>
            </div>
            <div className="stat p-8 text-center space-y-2">
                <div className="stat-title text-xl font-medium">Total Participants</div>
                <div className="stat-value text-rose-500 text-5xl">15k+</div>
                <div className="stat-desc text-lg font-medium">High Engagement</div>
            </div>
            <div className="stat p-8 text-center space-y-2">
                <div className="stat-title text-xl font-medium">Recurring Orders</div>
                <div className="stat-value text-rose-500 text-5xl">95%</div>
                <div className="stat-desc text-lg font-medium">User Satisfaction</div>
            </div>


        </div>
    );
};

export default Stat;