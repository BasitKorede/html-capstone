

const projectData = [
  {
    id: '1001',
    projectImage: './images/chef-4.jpg',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Duis orci est, ullamcorper in molestie nec. Maecenas tempor risus',
  },

  {
    id: '1002',
    projectImage: './images/chef-2.jpg',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Duis orci est, ullamcorper in molestie nec. Maecenas tempor risus',
  },

  {
    id: '1003',
    projectImage: './images/chef-1.jpg',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Duis orci est, ullamcorper in molestie nec. Maecenas tempor risus',
  },
  {
    id: '1004',
    projectImage: './images/speaker-one.jpg',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Duis orci est, ullamcorper in molestie nec. Maecenas tempor risus',
  },

  {
    id: '1005',
    projectImage: './images/cook-1.jpg',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Duis orci est, ullamcorper in molestie nec. Maecenas tempor risus',
  },

  {
    id: '1006',
    projectImage: './images/speaker-img.jpg',
    projectDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectFullDescription:
      'Duis orci est, ullamcorper in molestie nec. Maecenas tempor risus',
  },
]

function implementFeaturedSpeaker() {
  let innerHTML = '';
  for (let i = 0; i < projectData.length; i += 1) {
    const project = projectData[i]
    innerHTML += `<li class="featured-speakers-ul-li">
  <ul class="d-flex featured-speakers-li">
    <li class="featured-speakers-li">
      <img src="${project.projectImage}" class="featured-speaker-image" alt="speaker one">
    </li>
    <li class="featured-speakers-li">
      <p class="red-like-color lato-font featured-speaker-paragraph">${project.projectDescription}</p>
      <p class="lato-font featured-speaker-paragraph">${project.projectFullDescription}</p>
      </ul>
    </li>`
  }
  return innerHTML
}
const addFeacturedSpeakers = implementFeaturedSpeaker()
featuredSpeaker.innerHTML = addFeacturedSpeakers;
featuredSpeaker.style