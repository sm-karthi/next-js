import React from 'react'

function page({ params }: { params: { slug: Array<string> } }) {

  const { slug } = params;

  if (slug?.length === 2) {
    return (
      <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
    )
  }
  else if (slug?.length === 1) {
    return (
      <h1>Viewing docs for feature {slug[0]}</h1>
    )
  }

  




}

export default page
