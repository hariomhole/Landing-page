import React from 'react';

const Section2 = () => {
  const stats = [
    { id: 1, title: 'Total Customers', value: '2,450', change: '+12.5%', icon: 'fa-users', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 2, title: 'Satisfied Customers', value: '1,840', change: '+8.2%', icon: 'fa-face-smile', color: 'text-green-400', bg: 'bg-green-400/10' },
    { id: 3, title: 'Unsatisfied Customers', value: '320', change: '-4.5%', icon: 'fa-face-frown', color: 'text-red-400', bg: 'bg-red-400/10' },
    { id: 4, title: 'Customer Growth', value: '18.6%', change: '+6.4%', icon: 'fa-chart-line', color: 'text-purple-400', bg: 'bg-purple-400/10' },
  ];

  return (
    <section className="min-h-screen w-full bg-gray-900 text-white px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">

        <p className="text-green-400 text-sm font-semibold uppercase tracking-[3px]">
          Customer Analytics
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mt-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Know Your <span className="text-green-400">Customers.</span>
            </h1>
            <p className="text-gray-400 mt-5 max-w-2xl leading-7">
              Turn customer data into meaningful insights. Understand
              satisfaction, discover trends, and make smarter decisions.
            </p>
          </div>

          <button className="flex items-center gap-3 bg-green-400 text-gray-950 px-6 py-3 rounded-full font-semibold hover:bg-green-300 transition w-fit">
            Explore Insights <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-14">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/70 border border-gray-700 rounded-2xl p-6 hover:border-green-400/50 hover:-translate-y-1 transition duration-300"
            >
              <div className="flex justify-between items-center">
                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                  <i className={`fa-solid ${item.icon} text-xl`}></i>
                </div>

                <span className={`text-sm font-medium ${item.change.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                  {item.change}
                </span>
              </div>

              <p className="text-gray-400 text-sm mt-6">{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="rounded-2xl bg-gradient-to-br from-green-400/15 to-gray-800 border border-green-400/20 p-8 md:p-10">
            <div className="flex items-center gap-3 text-green-400 mb-5">
              <i className="fa-solid fa-arrow-trend-up text-xl"></i>
              <span className="font-semibold">Customer Satisfaction</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              75% of customers
              <br />
              <span className="text-green-400">are satisfied.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Understand customer feedback and discover opportunities
              to improve your business.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-800/70 border border-gray-700 p-8 md:p-10">
            <p className="text-gray-400 text-sm">YOUR NEXT STEP</p>

            <h2 className="text-3xl font-bold mt-4">
              Every customer
              <br />
              <span className="text-green-400">has a story.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Group your audience by behavior, satisfaction, and needs
              to create personalized experiences.
            </p>

            <button className="mt-6 flex items-center gap-3 text-green-400 font-semibold hover:gap-5 transition-all">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section2;