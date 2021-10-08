module.exports = (instance) => {
  console.log(instance.commentableResource);
  if (instance.commentableResource === "picture" && instance.picture !== undefined) {
    delete instance.post;
    delete instance.dataValues.post;
  } else if (instance.commentableResource === "post" && instance.post !== undefined) {
    instance.commentable = instance.post;
    delete instance.picture;
    delete instance.dataValues.picture;
  }

  console.log(instance.commentable);
  console.log(instance.picture, instance.post);
}
