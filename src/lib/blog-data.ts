export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image?: string;
  content: string;
  toc: { id: string; title: string; active?: boolean }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: 'call-for-volunteers-2020',
    title: 'Call for Volunteers - Women-in-WACREN',
    excerpt: 'WACREN is seeking collaborators from the NREN community for the implementation of its Women-in-WACREN program.',
    category: 'News',
    date: 'Aug 31, 2020',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    image: '/blog/Women-in-Tech.jpg',
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        WACREN is seeking collaborators from the NREN community for the implementation of its Women-in-WACREN program.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The initiative has developed a community of women in African NRENs promoting STEM (Science, Technology, Engineering and Mathematics) curricula and showcasing the opportunities with diversity and inclusion.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Following the successful outcomes of online courses and hackathons in previous years, the program has been in the AfricaConnect3 project to accommodate more participants across Africa.
      </p>

      <h2 id="outcomes" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Desired Outcomes</h2>
      <ul class="list-disc pl-5 mb-6 text-[17px] leading-relaxed text-slate-700 space-y-2">
        <li>Expansion of the existing “Physical Computing with Python” course and hackathon to include modules on Data Science and Robotics.</li>
        <li>Establishment of a cloud-based Internet of Things (IoT) platform hosted on REN infrastructure in REN for collection and analysis of data.</li>
        <li>Strategic partnerships with organisations committed to addressing the underrepresentation of women in STEM.</li>
        <li>Initiating a version in French of the various courses and activities.</li>
      </ul>

      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The implementation will involve moderating the community mailing list, staging the online courses and hackathon and engaging other women to advance the goals of the program.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The program is run on an annual basis, and the activity for 2020 is expected to be held from October to December.
      </p>

      <p class="my-10 text-[18px] md:text-[20px] font-bold text-slate-900 leading-relaxed">
        <span class="text-primary">Note:</span> While this is a call for volunteering, WACREN is willing to provide token payments to cover some of the volunteer’s expenses.
      </p>

      <p class="mb-6 text-[17px] leading-relaxed text-slate-700 font-medium">
        NRENs, organisations and individuals interested in collaborating with WACREN to fulfil this role should please send e-mail to <a href="mailto:secretariat@wacren.net" class="text-primary hover:underline">secretariat@wacren.net</a> with a brief description of their interest, ideas and any requirements by 25 September 2020.
      </p>
    `,
    toc: [
      { id: 'outcomes', title: 'Desired Outcomes', active: false },
    ]
  },
  {
    slug: 'wacren-strategic-partnerships-women-ict-2018',
    title: 'WACREN forges strategic partnerships to support women in ICT',
    excerpt: 'The West and Central African Research and Education Network (WACREN) demonstrated its commitment to opening windows of opportunities for women.',
    category: 'News',
    date: 'Feb 4, 2018',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The West and Central African Research and Education Network (WACREN) demonstrated its commitment to opening windows of opportunities for women, historically underrepresented in STEM fields, as it launched its first Women in WACREN event under the theme “Physical Computing with Python.”
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        In addition to providing an opportunity for women to enhance programming skills, the conference forged strategic partnerships with women and organizations committed to addressing the underrepresentation of women in the field and served as a model for member NRENs.
      </p>

      <blockquote class="flex gap-4 my-10 items-start">
        <span class="text-primary text-5xl font-serif leading-none pt-1 select-none" aria-hidden="true">&ldquo;</span>
        <div class="flex-1">
          <p class="text-lg md:text-[20px] font-bold text-slate-900 leading-relaxed mb-4">
            The workshop exceeded our expectations as it served as a platform for training, networking, and building strategic partnerships with women and organizations that share our commitment to increasing participation of women in all NREN initiatives. We hope to replicate the training for women at WACREN member institutions.
          </p>
          <p class="text-[16px] text-slate-600 font-medium">— Omo Oaiya, WACREN’s Chief Technology Officer</p>
        </div>
      </blockquote>

      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The workshop introduced content for a 10-week training experience which will continue online. A total of 30 women representing 5 countries participated in the workshop co-sponsored by Eko-Konnect, the University of Lagos (UNILAG,) and AfricaConnect2, and held at the University of Lagos, Entrepreneurship and Skill Development Center, January 22-26.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The workshop was followed by the Eko-Konnect ICT for Girls community day, an initiative to enhance opportunities for girls at the secondary and tertiary levels by improving their readiness to enter STEM fields. The event featured presentations by women in ICT who shared words of encouragement, strategies for success, and research affirming the need for more women in STEM fields.
      </p>

      <h2 id="cultural-factors" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Addressing Cultural Norms</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        In a presentation titled “Cultural Factors Influencing Female Participation in Software Development,” Mandeep Saini, the Head of Software Development at GEANT, outlined root causes of the underrepresentation of women in STEM fields, addressing unconscious bias and cultural norms that affect women’s preparation and experiences in the field.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Saini cited research evidence that demonstrates the business case for including women in the field.
      </p>

      <blockquote class="flex gap-4 my-10 items-start">
        <span class="text-primary text-5xl font-serif leading-none pt-1 select-none" aria-hidden="true">&ldquo;</span>
        <div class="flex-1">
          <p class="text-lg md:text-[20px] font-bold text-slate-900 leading-relaxed mb-4">
            Groups with greater diversity solve complex problems better and faster than homogeneous groups. Tech companies led by women delivered higher revenues using less capital and were more likely to survive the transition from startup to established company.
          </p>
          <p class="text-[16px] text-slate-600 font-medium">— Mandeep Saini, Head of Software Development at GEANT</p>
        </div>
      </blockquote>
    `,
    toc: [
      { id: 'cultural-factors', title: 'Addressing Cultural Norms', active: false },
    ]
  },
  {
    slug: 'empowering-women-in-western-africa-in-the-field',
    title: 'Empowering women in Western Africa - In The Field Blog article on WACREN',
    excerpt: 'More than 2,000 young women in Western Africa have received a jump-start for pursuing a career in STEM by joining courses provided by WACREN.',
    category: 'News',
    date: 'Jul 21, 2021',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    image: '/blog/shutterstock_671507512-itf-1140x680-1.jpg',
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        More than 2,000 young women in Western Africa have received a jump-start for pursuing a career in science, technology, engineering and math (STEM) by joining courses and workshops provided by the regional research and education network WACREN.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The program, known as Women-in-WACREN, was initiated in 2018. The regional network launched a five-day workshop offering knowledge and experience on basic programming (Python), application of Git and DevOps and introduction to embedded systems (Raspberry Pi) and sensors.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700 font-bold">
        Read <a href="https://www.inthefieldstories.net/empowering-women-in-western-africa/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">more here</a>.
      </p>
    `,
    toc: []
  },
  {
    slug: 'wiw-physical-computing-python-dakar',
    title: 'Women in WACREN - Physical Computing with Python',
    excerpt: 'This first “Women In WACREN” training and community event is held in collaboration with SenChix, UCAD, and the AfricaConnect2 project.',
    category: 'News',
    date: 'Oct 1, 2017',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        This first “Women In WACREN” training and community event is held in collaboration with <a href="http://www.senchix.sn" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">SenChix</a>, a women in technology group hosted by snRER, the <a href="https://www.ucad.sn/index.php?option=com_content&view=article&id=1523&Itemid=354" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Faculty of Science and Technology</a> of the Université Cheikh Anta Diop de Dakar (UCAD) and the <a href="https://www.africaconnect2.net/Pages/Home.aspx" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">AfricaConnect2</a> project.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Leveraging a broader promotion of maker culture and hackerspaces in NRENs, the event will kick off a program aimed at reducing current imbalances in gender participation. It will support female students and staff to improve STEM skills through experimentation with robots and electronics and learning to program these devices.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The participants wind down at the end of the 5-day training workshop in the Senchix community day, a networking opportunity open to faculty and guests from other women tech hubs with representation from government and industry.
      </p>

      <h2 id="workshop-goal" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Workshop Goal</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Teach Python in a series of practical hands-on exercises that introduce the fundamentals of physical computing with the Raspberry Pi, GPIO breadboard and sensors.
      </p>

      <h2 id="audience" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Targeted Audience</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Female students and staff in computing and engineering or from other disciplines with good computer skills and interest in intelligent environments. A programming background and knowledge of Linux or other UNIX operating system is useful but not required.
      </p>

      <h2 id="outcomes" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Expected Outcomes</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Over time, participants will be able to work on their own or in small teams to develop electronic or robotic projects at varying levels of complexity to solve problems.
      </p>

      <h2 id="logistics" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Language & Logistics</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Conducted in French with bilingual trainers.
      </p>
      <ul class="list-disc pl-5 mb-6 text-[17px] leading-relaxed text-slate-700 space-y-2">
        <li>Lunches and coffee breaks will be provided for all participants for the duration of the workshop.</li>
        <li>Selected international participants who are not able to get full or partial sponsorship from their organisations to attend the workshop may be supported for travel and/or accommodation, subject to availability of resources.</li>
      </ul>

      <p class="mb-6 text-[17px] leading-relaxed font-semibold text-slate-900">
        Register at <a href="https://indico.wacren.net/event/55/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://indico.wacren.net/event/55/</a> - The deadline for application is 25 October 2017.
      </p>
    `,
    toc: [
      { id: 'workshop-goal', title: 'Workshop Goal', active: false },
      { id: 'audience', title: 'Targeted Audience', active: false },
      { id: 'outcomes', title: 'Expected Outcomes', active: false },
      { id: 'logistics', title: 'Language & Logistics', active: false },
    ]
  },
  {
    slug: 'wiw-physical-computing-python-lagos',
    title: 'Women in WACREN - Physical Computing with Python - Lagos Edition',
    excerpt: 'This “Women In WACREN” training and community event is held in collaboration with the Eko-Konnect Research and Education Initiative and UNILAG.',
    category: 'News',
    date: 'Dec 19, 2017',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        This “Women In WACREN” training and community event is held in collaboration with the <a href="http://www.eko-konnect.org.ng" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Eko-Konnect Research and Education Initiative</a>, a cluster the Nigerian NREN (<a href="http://www.ngren.edu.ng" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">NgREN</a>), the Entrepreneurship & Skills Development Centre and Faculty of Engineering of the <a href="http://www.unilag.edu.ng" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">University of Lagos (UNILAG)</a>, and the <a href="http://www.africaconnect2.net" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">AfricaConnect2</a> project.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Leveraging a broader promotion of maker culture and hackerspaces in NRENs, the event is part of a program aimed at reducing current imbalances in gender participation. It will support female students and staff to improve STEM skills through experimentation with robots and electronics and learning to program these devices.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The participants wind down at the end of the 5-day training workshop in the "ICT for Girls" community day, a networking opportunity open to faculty and guests from other women tech hubs with representation from government and industry.
      </p>

      <h2 id="workshop-goal" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Workshop Goal</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Teach Python in a series of practical hands-on exercises that introduce the fundamentals of physical computing with the Raspberry Pi, GPIO breadboard and sensors.
      </p>

      <h2 id="audience" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Targeted Audience</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Female students and staff in computing and engineering or from other disciplines with good computer skills and interest in intelligent environments. A programming background and knowledge of Linux or other UNIX operating system is useful but not required.
      </p>

      <h2 id="outcomes" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Expected Outcomes</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Over time, participants will be able to work on their own or in small teams to develop electronic or robotic projects at varying levels of complexity to solve problems.
      </p>

      <h2 id="logistics" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Language & Logistics</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Conducted in English with bilingual trainers.
      </p>
      <ul class="list-disc pl-5 mb-6 text-[17px] leading-relaxed text-slate-700 space-y-2">
        <li>Lunches and coffee breaks will be provided for all participants for the duration of the workshop.</li>
        <li>Selected international participants who are not able to get full or partial sponsorship from their organisations to attend the workshop may be supported for travel and/or accommodation, subject to availability of resources.</li>
      </ul>

      <p class="mb-6 text-[17px] leading-relaxed font-semibold text-slate-900">
        Deadline for application is 10 January 2018 at <a href="https://indico.wacren.net/event/61/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://indico.wacren.net/event/61/</a>
      </p>
    `,
    toc: [
      { id: 'workshop-goal', title: 'Workshop Goal', active: false },
      { id: 'audience', title: 'Targeted Audience', active: false },
      { id: 'outcomes', title: 'Expected Outcomes', active: false },
      { id: 'logistics', title: 'Language & Logistics', active: false },
    ]
  },
  {
    slug: 'wiw-python-workshop-2024',
    title: 'Women-in-WACREN 2024 - Python for Weather and Climate Data Analysis',
    excerpt: 'The WiW 2024 Event will focus on training in Python for weather and climate data analysis. Apply now!',
    category: 'Event',
    date: 'Jul 19, 2024',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    image: '/blog/1MAIN-DESIGN_WiW_WACREN-artwork.jpg',
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The <a href="https://wacren.net/en/programmes/women-in-wacren/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Women-in-WACREN (WiW)</a> programme is WACREN’s initiative to address gender inequality and the under-representation of women in the Science, Technology, Engineering, and Mathematics (STEM) fields. Launched in 2018, WiW aims to educate, equip, and empower women with the skills and confidence needed to excel in male-dominated STEM careers. Over the years, WiW has inspired and transformed over 2000 young women into innovators, makers, and tech entrepreneurs within the WACREN region and beyond.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The WiW 2024 Event will focus on training in Python for weather and climate data analysis. This workshop presents a unique opportunity for women to gain hands-on experience and enhance their technical skills in this critical area. Participants will engage in a series of intensive, practical sessions designed to provide a deep understanding of Python programming and its applications in weather and climate data analysis. Experts in the field will facilitate the workshop, allowing participants to learn from and network with leading professionals and peers.
      </p>

      <h2 id="partnerships" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Partnership and Collaboration Opportunities</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        WACREN is open for partnerships with regional and national RENs across Africa, women group activists, international donors, governmental agencies and regional bodies; partnerships to scale up the programme to ensure that relevant investments are made in young women and girls to make their potential to find expression. The 2024 event is supported by the <a href="https://africaconnect3.net/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">AfricaConnect3</a> project (co-funded by the European Commission).
      </p>

      <h2 id="target" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Target Participants</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Target participants include women from African countries who are interested in weather and climate science and emerging technologies such as IoT, AI, and Open Science.
      </p>

      <h2 id="criteria" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Selection Criteria</h2>
      <ul class="list-disc pl-5 mb-6 text-[17px] leading-relaxed text-slate-700 space-y-2">
        <li>Participants must be women researchers in STEM, including students, recent graduates, and early-career professionals.</li>
        <li>They should be interested in emerging technologies such as IoT, Open Science, AI, and scientific computing that align with their career goals.</li>
        <li>Basic knowledge of Python programming skills and Gitlab may be required, with a preference for those experienced in data analysis or scientific computing.</li>
      </ul>

      <p class="mb-6 text-[17px] leading-relaxed font-semibold text-slate-900">
        Registration ends on August 2, 2024
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The selection process will ensure regional representation within WACREN and prioritize inclusivity. Selected participants will be notified by August 9, 2024.
      </p>

      <p class="my-10 text-[18px] md:text-[20px] font-bold text-slate-900 leading-relaxed">
        <span class="text-primary">NB.</span> Please note that the Workshop will be delivered in English.
      </p>

      <p class="mb-6 text-[17px] leading-relaxed text-slate-700 font-bold">
        <a href="https://indico.wacren.net/event/207/registrations/149/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Click here to apply</a>.
      </p>
    `,
    toc: [
      { id: 'partnerships', title: 'Partnership and Collaboration', active: false },
      { id: 'target', title: 'Target Participants', active: false },
      { id: 'criteria', title: 'Selection Criteria', active: false },
    ]
  },
  {
    slug: 'wiw-francophone-workshop-2024',
    title: 'Women-in-WACREN Francophone Workshop',
    excerpt: 'The WiW 2024 Francophone event will focus on practically using the Python programme for weather and climate data analysis. Apply now!',
    category: 'Event',
    date: 'Oct 25, 2024',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    image: '/blog/06AC407A-F040-4BC1-9019-53B75D801BDF.jpg',
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The <a href="https://wacren.net/en/programmes/women-in-wacren/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Women-in-WACREN (WiW)</a> programme is WACREN’s initiative to address gender inequality and the under-representation of women in the Science, Technology, Engineering, and Mathematics (STEM) fields. Launched in 2018, WiW aims to educate, equip, and empower women with the skills and confidence needed to excel in male-dominated STEM careers. Over the years, WiW has inspired and transformed over 2000 young women into innovators, makers, and tech entrepreneurs within the WACREN region and beyond.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The WiW 2024 Francophone event will focus on practically using the Python programme for weather and climate data analysis. This workshop presents a unique opportunity for women to gain hands-on experience and enhance their technical skills in this critical area. Participants will engage in intensive, practical sessions designed to provide a deep understanding of Python programming and its applications in weather and climate data analysis. Experts in the field will facilitate the workshop, allowing participants to learn from and network with leading professionals and peers.
      </p>

      <h2 id="partnerships" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Partnership and Collaboration Opportunities</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        WACREN is open for partnerships with regional and national RENs across Africa, women group activists, international donors, governmental agencies and regional bodies; partnerships to scale up the programme to ensure that relevant investments are made in young women and girls to make their potential to find expression. The 2024 event is supported by the <a href="https://africaconnect3.net/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">AfricaConnect3</a> project (co-funded by the European Commission).
      </p>

      <h2 id="target" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Target Participants</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Target participants include women from African countries who are interested in weather and climate science and emerging technologies such as IoT, AI, and Open Science.
      </p>

      <h2 id="criteria" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Selection Criteria</h2>
      <ul class="list-disc pl-5 mb-6 text-[17px] leading-relaxed text-slate-700 space-y-2">
        <li>Participants must be women researchers in STEM, including students, recent graduates, and early-career professionals.</li>
        <li>They should be interested in emerging technologies such as IoT, Open Science, AI, and scientific computing that align with their career goals.</li>
        <li>Basic knowledge of Python programming skills and Gitlab may be required, with a preference for those experienced in data analysis or scientific computing.</li>
      </ul>

      <p class="mb-6 text-[17px] leading-relaxed font-semibold text-slate-900">
        Registration ends on Tuesday, October 29, 2024
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The selection process will ensure regional representation within WACREN and prioritize inclusivity. Selected participants will be notified by Thursday, October 31, 2024.
      </p>

      <p class="my-10 text-[18px] md:text-[20px] font-bold text-slate-900 leading-relaxed">
        <span class="text-primary">NB.</span> Please note that the Workshop will be delivered in French only.
      </p>

      <p class="mb-6 text-[17px] leading-relaxed text-slate-700 font-bold">
        Apply here: <a href="https://indico.wacren.net/event/236/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://indico.wacren.net/event/236/</a>
      </p>
    `,
    toc: [
      { id: 'partnerships', title: 'Partnership and Collaboration', active: false },
      { id: 'target', title: 'Target Participants', active: false },
      { id: 'criteria', title: 'Selection Criteria', active: false },
    ]
  },
  {
    slug: 'wiw-network-climate-innovation-lab-launch',
    title: "Women-in-WACREN to launch a new forum and a lab to enhance women's contribution to climate innovation in Africa",
    excerpt: 'Join us for the virtual launch of the Women-in-WACREN Network and the introduction of the Climate Innovation Lab 2026 on August 25, 2026.',
    category: 'Event',
    date: 'Aug 18, 2026',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    image: '/blog/WIW-Network-poster.jpg',
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Building on the legacy of previous Women-in-WACREN (WiW) initiatives, WACREN is pleased to announce the next major milestone for women's inclusion in regional climate science and innovation: the Women-in-WACREN Network.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The WiW Network online launch scheduled for August 25, 2026, will focus on the theme: "Connecting Women and Building Solutions". This vibrant network builds on past milestones, creating a sustainable regional platform where women in STEM, research, and technology can connect, exchange knowledge, and access long-term mentorship. Whether members are students, early-career researchers, or tech entrepreneurs, this forum is designed to bridge disciplinary boundaries and accelerate collective impact across West and Central Africa.
      </p>

      <h2 id="innovation-lab" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Climate Innovation Lab 2026</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Alongside this Network launch, the virtual event will formally introduce the ‘Climate Innovation Lab 2026’ - a structured, collaborative innovation programme that would strengthen women's technical skills in designing practical digital solutions that address pressing regional climate challenges. Participants will learn how the programme guides them from initial problem identification through prototype development to ongoing mentorship.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        With support from the European Commission through AfricaConnect4, WACREN continues to unlock the potential of women in research and education. Join us for this transformative virtual launch to expand your network, elevate your skills, and help shape a sustainable future for African science and technology.
      </p>

      <p class="mb-6 text-[17px] leading-relaxed text-slate-700 font-medium">
        Register here: <a href="https://wacren.zoom.us/meeting/register/FYmtU0JnSNy8138x8Zkluw" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://wacren.zoom.us/meeting/register/FYmtU0JnSNy8138x8Zkluw</a>
      </p>
    `,
    toc: [
      { id: 'innovation-lab', title: 'Climate Innovation Lab 2026', active: false },
    ]
  },
  {
    slug: 'henrietta-ampofo-innovation-journey',
    title: "From WiW to Wow! Henrietta Ampofo's inspiring journey of innovation",
    excerpt: 'Building on the confidence gained through the WiW program, Henrietta has created an innovative digital solution, Implementation Tracker, set to make a real impact in Ghana.',
    category: 'News',
    date: 'October 17, 2025',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    image: '/blog/Henritta-300x208.jpg',
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        When Henrietta Ampofo joined the Women in WACREN (WiW) 2024 cohort in Accra, Ghana, for the Python for Weather and Climate Data, she quickly stood out for her passion, curiosity, and active participation. The WiW initiative—designed to empower women in STEM across West and Central Africa—has inspired hundreds of women to push boundaries, and Henrietta has become one of its shining examples.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        While her latest achievement is not directly a WiW project, it embodies the WiW spirit. Building on the confidence and impetus she gained through the program, Henrietta has created an innovative digital solution, <strong>Implementation Tracker</strong>, which is set to make a real impact in Ghana.
      </p>

      <h2 id="the-tracker" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">The Implementation Tracker</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Think of it as a project information platform for NGOs and CSOs. It is a secure PowerApp that tracks projects and monitors how funds are being spent. It captures all the important information – project details, funding sources, timelines, and scope – across different regions. It puts everything in one place, making it easier to make informed decisions.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Additionally, it features built-in approval processes and Power BI dashboards that help identify areas that require more attention, reduce duplicated efforts, and ensure resources are allocated to the communities that need them most.
      </p>

      <h2 id="inspiration" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Inspiration and Mentorship</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The idea came from her experience working in public health during the UNFPA Youth Leaders (YoLe) Fellowship, where she had discussions with the UNFPA Country Representative, Dr. David Ochan. She saw firsthand how difficult it was to track projects. Under the mentorship of Amin Abuhammadi Ajado from Women in Power (Platform), she transformed a real-world problem into a user-friendly innovation that aligns with global commitments to equitable development and the Sustainable Development Goals.
      </p>

      <blockquote class="flex gap-4 my-10 items-start">
        <span class="text-primary text-5xl font-serif leading-none pt-1 select-none" aria-hidden="true">&ldquo;</span>
        <p class="text-lg md:text-[20px] font-bold text-slate-900 leading-relaxed">
          The WiW initiative not only built my capacity in quantitative analysis using Python but was also very inspiring - to have women who have accomplished great feats in the same room with you, teaching and sharing their experiences with you, is priceless!
        </p>
      </blockquote>

      <h2 id="wiw-impact" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">The Value of Investing in Women</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        For WACREN, stories like Henrietta’s demonstrate the value of investing in women leaders. While WiW equips participants with technical skills and networks, it also sparks the confidence to dream, build, and lead solutions beyond the programme itself. Henrietta’s journey is proof that when women are given space, support, and encouragement, they can translate ideas into tools that make a difference at scale.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        As WACREN continues to expand the WiW programme, we celebrate Henrietta’s milestone as a reminder of why it matters: empowering women doesn’t just change individual lives, it changes communities.
      </p>
    `,
    toc: [
      { id: 'the-tracker', title: 'The Implementation Tracker', active: false },
      { id: 'inspiration', title: 'Inspiration and Mentorship', active: false },
      { id: 'wiw-impact', title: 'The Value of Investing in Women', active: false },
    ]
  },
  {
    slug: 'smart-waste-management-burkina-faso',
    title: 'Women-In-WACREN beneficiary develops smart waste management solution in Burkina Faso',
    excerpt: 'WACREN is proud to spotlight the remarkable achievement of Rasmata Simporé, a young researcher from Burkina Faso, whose innovation is set to transform the way urban waste is managed.',
    category: 'News',
    date: 'October 17, 2025',
    author: {
      name: 'Padmore Aning',
      avatar: '/authors/PAD.png',
    },
    image: '/blog/Rasmata-300x180.png',
    content: `
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        WACREN is proud to spotlight the remarkable achievement of Rasmata Simporé, a young researcher from Burkina Faso, whose innovation is set to transform the way urban waste is managed in her country. Her waste management innovation, the Trash App, was inspired and shaped in part by her participation in the <a href="https://indico.wacren.net/event/236/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Women-in-WACREN (WiW) workshop</a> held in Abidjan, Côte d'Ivoire, in 2024.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Rasmata Simporé, then a student at the Doctoral School of Computer Science Applied to Climate Change at Joseph KI-ZERBO University, attended the workshop with a passion for developing solutions that address both environmental and public health challenges. Inspired by real-world examples and mentorship, Rasmata began developing an intelligent waste collection system that integrates mobile, web, and IoT technologies to improve waste management and sanitation in Ouagadougou and beyond.
      </p>
      
      <h2 id="the-trash-app" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">The Trash App Innovation</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Her solution, Trash App, comprises a mobile app for citizens to report waste issues and request services, a web dashboard for decision-makers and waste management operators, and smart sensors installed in waste bins that transmit real-time data on bin location and fill levels, enabling optimised waste collection routes. The app enhances communication between citizens and waste collectors, increases transparency, and provides policymakers with valuable data to improve urban sanitation strategies.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        This innovation, developed as part of her master's thesis, has been described as a true ecosystem of smart solutions, with the potential to transform sanitation efforts and empower communities to engage in environmental preservation.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        The Ouagadougou City Council has also expressed strong interest in piloting the project in select urban zones, a testament to the project's promise in tackling sanitation-related health issues.
      </p>

      <h2 id="wacrens-impact" class="text-2xl font-semibold text-slate-900 mt-12 mb-4">Empowering Regional Innovators</h2>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        At WACREN, Rasmata’s story affirms the value of intentional investments in gender equity, practical capacity building, and regional collaboration. Through the Women in WACREN, <a href="https://video.wacren.net/channel/Women-In-WACREN/721046" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">WACREN continues to equip women</a> researchers and innovators with the tools, networks, and confidence to lead change in their fields and communities.
      </p>
      <p class="mb-6 text-[17px] leading-relaxed text-slate-700">
        Rasmata’s journey is a shining example of how regional research and education networks can drive innovation, inclusivity, and impact through women's empowerment.
      </p>
    `,
    toc: [
      { id: 'the-trash-app', title: 'The Trash App Innovation', active: false },
      { id: 'wacrens-impact', title: 'Empowering Regional Innovators', active: false },
    ]
  }
];

export function getAllPostsSorted() {
  return [...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  return POSTS.find(post => post.slug === slug) || null;
}
