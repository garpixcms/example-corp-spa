const Content = ({ data }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data }}/>
  )
}

export default Content;