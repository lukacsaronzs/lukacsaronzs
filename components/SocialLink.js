const SocialLink = ({ icon, link, alt }) => {
  return (
    <a
      href={link}
      className="text-base font-normal text-gray-600 dark:text-gray-300"
    >
      <img src={icon} alt={alt} />
    </a>
  );
};

export default SocialLink;
