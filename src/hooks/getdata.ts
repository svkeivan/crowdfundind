export const getServerSideProps = async () => {
  // Fetch data from an API
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();

  // Pass data to the page component props
  return {
    props: {
      data,
    },
  };
};
