import React from 'react'
import { policies } from '@/utils/constants'

const Terms = () => {
  return (
    <>
      <div className="privacy w-full bg-enipp-dark1 text-white flex justify-center items-center p-4 md:p-12">
        <div className="max-w-4xl w-full mx-auto px-4 py-8 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Our Policies</h1>
          
          {/* All Policies Listed Vertically */}
          <div className="space-y-12">
            {policies.slice(1).map((policy, index) => (
              <div key={index} className="policy-container">
                <div className="mb-6 border-b pb-2 border-gray-200">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {policy.title}
                  </h2>
                  {policy.effectiveDate && (
                    <p className="text-sm text-gray-300 mb-2">
                      Effective Date: {policy.effectiveDate}
                    </p>
                  )}
                  {policy.lastUpdated && (
                    <p className="text-sm text-gray-300 mb-2">
                      Last Updated: {policy.lastUpdated}
                    </p>
                  )}
                </div>
                
                {/* Policy Sections */}
                <div className="space-y-6">
                  {policy.sections.map((section, idx) => (
                    <div key={idx} className="policy-section">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {section.heading}
                      </h3>
                      {typeof section.content === 'string' ? (
                        <p className="text-gray-300">{section.content}</p>
                      ) : (
                        <ul className="list-disc pl-5 space-y-1 text-gray-300">
                          {section.content.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Terms