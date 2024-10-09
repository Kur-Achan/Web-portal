import Layout from "../../../../Layout";

export default function AssessmentResults() {
    const scores = [
      { module: 'Module 1', score: 82 },
      { module: 'Module 2', score: 65 },
      { module: 'Module 3', score: 30 },
    ];
  
    return (
    
      <div className="flex h-screen">
     
  
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6 flex justify-center items-center">
          <div className="space-y-6 w-full max-w-lg">
            {scores.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center border border-gray-300"
              >
                <h3 className="text-lg font-semibold">{item.module}</h3>
                <p className="text-xl font-bold text-yellow-500">{item.score}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    
    );
  };