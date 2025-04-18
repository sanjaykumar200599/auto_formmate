import React from 'react'

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div className="max-w-md text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Error</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found ⚠️</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-red-600 text-white rounded-2xl shadow hover:bg-green-700 transition"
      >
        Return Home
      </a>
    </div>
  </div>
  )
}

export default PageNotFound