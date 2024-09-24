export const emotionalSelfAwareness = [
  "I am aware of my emotions as I experience them.",
  "I can easily identify why I am feeling a certain way.",
  "I take time to reflect on my emotions and reactions after an event.",
  "I am aware when I am feeling overwhelmed and know how to manage it.",
  "I regularly practice self-care to maintain my emotional well-being.",
  "I can identify and challenge my negative self-talk.",
  "I understand how my actions affect others emotionally.",
  "I accept responsibility for my emotions rather than blaming others.",
  "I am mindful of how my emotional state affects my work performance.",
  "I feel comfortable expressing both positive and negative emotions.",
  "I am aware of how my emotions influence my behavior.",
  "I often consider how my words and actions will affect others emotionally.",
];

export const selfRegulation = [
  "I stay calm and composed under pressure.",
  "I can effectively manage my negative emotions.",
  "I can recover quickly from setbacks or disappointments.",
  "I maintain control over my emotions in challenging situations.",
  "I handle stress well without it affecting my performance.",
  "I can stay focused even when I am emotionally charged.",
  "I can separate my emotions from the facts in decision-making.",
  "I accept criticism without becoming defensive or upset.",
  "I adapt my emotional responses based on the situation and people involved.",
  "I can find constructive ways to express anger or frustration.",
  "I can cheer others up when they are feeling down.",
  "I manage conflicts constructively and stay composed.",
];

export const socialAwareness = [
  "I am good at recognizing the emotions of others.",
  "I can sense when someone is upset even if they don’t say it.",
  "I am empathetic towards others' feelings and perspectives.",
  "I actively listen to others without interrupting.",
  "I can influence other people’s emotions in a positive way.",
  "I recognize when someone needs emotional support.",
  "I understand and appreciate diverse perspectives.",
  "I often help others manage their emotions.",
  "I am good at reading social cues in group settings.",
  "I encourage others to express their feelings openly.",
  "I am considerate of others emotional needs.",
  "I strive to maintain harmony in my relationships.",
];

export const relationshipManagement = [
  "I find it easy to communicate my feelings to others.",
  "I am able to manage conflicts constructively.",
  "I often resolve misunderstandings quickly.",
  "I build and maintain strong relationships with different types of people.",
  "I can mediate when others are in conflict.",
  "I can influence others to resolve their conflicts positively.",
  "I express empathy without being overwhelmed by others emotions.",
  "I can express my needs and boundaries clearly in relationships.",
  "I communicate openly and avoid bottling up my feelings.",
  "I am comfortable discussing sensitive topics without getting defensive.",
  "I am proactive in finding solutions when I or others feel stuck emotionally.",
  "I remain patient and understanding when others are emotional.",
];

export const adaptability = [
  "I can adapt my approach based on the emotional tone of a situation.",
  "I handle change with flexibility and emotional resilience.",
  "I can maintain emotional balance during challenging tasks.",
  "I recover quickly from setbacks or disappointments.",
  "I can turn a negative situation into a learning experience.",
  "I handle criticism without taking it personally.",
  "I can let go of grudges and forgive easily.",
  "I stay positive even when faced with setbacks.",
  "I can maintain focus on my goals despite emotional distractions.",
  "I handle change well without becoming overwhelmed.",
  "I maintain control over my emotions during stressful changes.",
  "I am resilient in the face of emotional challenges.",
];

export const testResults = function (
  emotional,
  self,
  social,
  relationship,
  adaptable,
  total
) {
  var emotionalReturn = <div className="max-w-[800px] mx-auto"></div>;
  var selfReturn = <div className="max-w-[800px] mx-auto"></div>;
  var socialReturn = <div className="max-w-[800px] mx-auto"></div>;
  var relationshipReturn = <div className="max-w-[800px] mx-auto"></div>;
  var adaptableReturn = <div className="max-w-[800px] mx-auto"></div>;
  var totalReturn = <div className="max-w-[800px] mx-auto"></div>;

  if (emotional >= 12 && emotional < 24) {
    emotionalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Emotional Self-Awareness Score: {emotional} Points: Very Low
          Awareness
        </h2>{" "}
        <p>
          You frequently struggle to identify your emotions, making emotional
          self-awareness a key area for growth.
        </p>
      </div>
    );
  } else if (emotional >= 24 && emotional < 36) {
    emotionalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Emotional Self-Awareness Score: {emotional} Points: Low Awareness
        </h2>{" "}
        <p>
          You occasionally understand your emotions but often feel disconnected
          or unsure of why you feel the way you do.
        </p>
      </div>
    );
  } else if (emotional >= 36 && emotional < 48) {
    emotionalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Emotional Self-Awareness Score: {emotional} Points: Moderate
          Awareness
        </h2>{" "}
        <p>
          You are often aware of your emotions but may sometimes struggle to
          identify the root causes of your feelings.
        </p>
      </div>
    );
  } else {
    emotionalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Emotional Self-Awareness Score: {emotional} Points: High
          Awareness
        </h2>{" "}
        <p>
          You have a strong understanding of your emotions and are reflective
          about your emotional states.
        </p>
      </div>
    );
  }

  if (self >= 12 && self < 24) {
    selfReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Self-Regulation Score: {self} Points: Very Low Control
        </h2>{" "}
        <p>
          You often struggle to control your emotions, leading to impulsive
          reactions or emotional overwhelm.
        </p>
      </div>
    );
  } else if (self >= 24 && self < 36) {
    selfReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Self-Regulation Score: {self} Points: Low Control
        </h2>{" "}
        <p>
          Emotional regulation is inconsistent; you may find it hard to manage
          your reactions in difficult situations.
        </p>
      </div>
    );
  } else if (self >= 36 && self < 48) {
    selfReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Self-Regulation Score: {self} Points: Moderately Controlled
        </h2>{" "}
        <p>
          You usually handle your emotions well but may find it challenging to
          stay composed in highly stressful moments.
        </p>
      </div>
    );
  } else {
    selfReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Self-Regulation Score: {self} Points: Highly Controlled
        </h2>{" "}
        <p>
          You manage your emotions well, even in stressful situations, and
          maintain composure effectively.
        </p>
      </div>
    );
  }

  if (social >= 12 && social < 24) {
    socialReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Empathy and Social Awareness Score: {social} Points: Very Low
          Empathy
        </h2>{" "}
        <p>
          You struggle significantly with recognizing and responding to others'
          emotions, making empathy a key area for development.
        </p>
      </div>
    );
  } else if (social >= 24 && social < 36) {
    socialReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Empathy and Social Awareness Score: {social} Points: Low Empathy
        </h2>{" "}
        <p>
          Understanding others' emotions can be challenging, and you may feel
          disconnected in social interactions.
        </p>
      </div>
    );
  } else if (social >= 36 && social < 48) {
    socialReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Empathy and Social Awareness Score: {social} Points: Moderately
          Empathetic
        </h2>{" "}
        <p>
          You are generally good at reading others' emotions but may
          occasionally miss subtle cues.
        </p>
      </div>
    );
  } else {
    socialReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Empathy and Social Awareness Score: {social} Points: Highly
          Empathetic
        </h2>{" "}
        <p>
          You excel at understanding others' emotions and responding with
          empathy and care.
        </p>
      </div>
    );
  }

  if (relationship >= 12 && relationship < 24) {
    relationshipReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Relationship Management Score: {relationship} Points: Very Weak
          Relationship Skills
        </h2>{" "}
        <p>
          You often struggle with relationship management, finding it hard to
          communicate or resolve conflicts positively.
        </p>
      </div>
    );
  } else if (relationship >= 24 && relationship < 36) {
    relationshipReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Relationship Management Score: {relationship} Points: Weak
          Relationship Skills
        </h2>{" "}
        <p>
          Building and maintaining positive relationships can be difficult,
          especially during emotional conflicts.
        </p>
      </div>
    );
  } else if (relationship >= 36 && relationship < 48) {
    relationshipReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Relationship Management Score: {relationship} Points: Adequate
          Relationship Skills
        </h2>{" "}
        <p>
          You are good at maintaining relationships but may encounter challenges
          during conflicts or emotional misunderstandings.
        </p>
      </div>
    );
  } else {
    relationshipReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Relationship Management Score: {relationship} Points: Strong
          Relationship Skills
        </h2>{" "}
        <p>
          You manage relationships well, communicating effectively and resolving
          conflicts constructively.
        </p>
      </div>
    );
  }

  if (adaptable >= 12 && adaptable < 24) {
    adaptableReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Adaptability and Resilience Score: {adaptable} Points: Very Low
          Adaptability and Resilience
        </h2>{" "}
        <p>
          You frequently struggle with change, and emotional setbacks can
          significantly affect your mood and behavior.
        </p>
      </div>
    );
  } else if (adaptable >= 24 && adaptable < 36) {
    adaptableReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Adaptability and Resilience Score: {adaptable} Points: Low
          Adaptability and Resilience
        </h2>{" "}
        <p>
          Change and setbacks can be challenging for you, often leading to
          prolonged emotional impacts.
        </p>
      </div>
    );
  } else if (adaptable >= 36 && adaptable < 48) {
    adaptableReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Adaptability and Resilience Score: {adaptable} Points: Moderately
          Adaptable and Resilient
        </h2>{" "}
        <p>
          You are adaptable but may need more time to recover from setbacks or
          adjust to unexpected changes.
        </p>
      </div>
    );
  } else {
    adaptableReturn = (
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          Your Adaptability and Resilience Score: {adaptable} Points: Highly
          Adaptable and Resilient
        </h2>{" "}
        <p>
          You handle change and setbacks well, quickly bouncing back and
          adjusting your emotions accordingly.
        </p>
      </div>
    );
  }

  if (total >= 60 && total < 80) {
    totalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-center text-[26px] font-bold py-10">**Result:**</h1>{" "}
        <p>
          Your score indicates a Very Low level of Emotional Intelligence,
          suggesting that you experience significant challenges in
          understanding, managing, and expressing your emotions. You may
          frequently feel overwhelmed by your emotional reactions, struggle with
          empathy, and find it difficult to maintain positive relationships.
          While this score highlights areas of difficulty, it also provides an
          opportunity for personal growth. With targeted support and the right
          strategies, you can begin to build your emotional skills and improve
          your quality of life.
        </p>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Awareness of Neurodivergence and Mental Health Considerations:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Neurodivergent Sensitivities**: If you are neurodivergent, such
            as having ADHD, autism, or other cognitive differences, these traits
            can profoundly impact your emotional processing. Sensory
            sensitivities, challenges with executive function, or difficulties
            in social communication can all contribute to emotional
            dysregulation. Recognizing that these factors are part of your
            unique experience is essential, and seeking support or tailored
            strategies—like structured routines, visual aids, or therapy—can
            help manage these challenges.
          </li>
          <li className="pt-4">
            - **Mental Health Awareness**: Mental health conditions, such as
            anxiety, depression, PTSD, or other mood disorders, can
            significantly affect your emotional intelligence. These conditions
            can make emotional regulation and interpersonal interactions
            particularly challenging, often leading to emotional exhaustion,
            irritability, or withdrawal. Understanding that these difficulties
            are not a personal failing, but rather symptoms that can be managed
            with appropriate support, is key to moving forward.
          </li>
          <li className="pt-4">
            - **Impact of Past Trauma**: Trauma can have a lasting impact on
            emotional regulation, making certain situations feel particularly
            triggering or overwhelming. Past traumatic experiences may cause you
            to react strongly in ways that feel uncontrollable or confusing.
            Seeking trauma-informed support, such as therapy or support groups,
            and learning grounding techniques can help you regain a sense of
            safety and control over your emotional responses.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Areas for Continued Growth:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Developing Emotional Awareness**: Start small by naming your
            emotions when you feel them—using simple labels like “angry,” “sad,”
            or “anxious” can help you begin to understand your emotional
            landscape. Keeping a journal of daily feelings or using apps
            designed to track mood can provide a clearer picture of your
            emotional patterns.
          </li>
          <li className="pt-4">
            - **Practicing Basic Self-Regulation Skills**: Learn and practice
            basic techniques to calm yourself during emotional surges. This
            could include deep breathing exercises, short walks, listening to
            calming music, or using sensory tools like stress balls. These small
            interventions can help you start to gain some control over your
            emotional responses.
          </li>
          <li className="pt-4">
            - **Improving Empathy and Connection**: Focus on improving your
            listening skills by paying full attention during conversations
            without interrupting or planning your response. Trying to reflect on
            what the other person might be feeling can gradually help you build
            empathy and improve your social awareness.
          </li>
          <li className="pt-4">
            - **Strengthening Communication Skills**: Work on expressing your
            emotions in simple, clear terms. Avoid blaming language, and try to
            communicate how you feel without escalating conflict. Learning to
            express yourself calmly and listening actively to others can
            gradually improve your relationship skills.
          </li>
          <li className="pt-4">
            - **Building Resilience Through Small Wins**: Set small, achievable
            goals that help you regain a sense of control and accomplishment.
            Celebrate even minor successes, as these can help build confidence
            and emotional resilience over time. Seeking support from friends,
            family, or professionals can also provide valuable encouragement.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Conclusion:**
        </h2>
        <p>
          Your current score reflects significant challenges in emotional
          intelligence, but it’s important to remember that these skills can be
          developed with time, effort, and the right support. Focus on small,
          manageable steps to improve your emotional awareness, self-regulation,
          empathy, and communication skills. Emotional growth is a gradual
          process, and every positive change, no matter how small, is progress.
          Embrace this journey with patience, self-compassion, and a willingness
          to seek help when needed, as these efforts will lead to meaningful
          improvements in your emotional well-being and relationships.
        </p>
      </div>
    );
  } else if (total >= 80 && total < 120) {
    totalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-center text-[26px] font-bold py-10">**Result:**</h1>{" "}
        <p>
          Your score falls within the Low Emotional Intelligence category,
          indicating that while you have some awareness of emotions, you often
          face challenges in managing them effectively. You may find it
          difficult to regulate your emotional responses, connect deeply with
          others, or handle stress and conflict constructively. This profile
          acknowledges the difficulties you might experience with emotions and
          provides guidance on steps you can take to enhance your emotional
          intelligence over time.
        </p>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Awareness of Neurodivergence and Mental Health Considerations:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Neurodivergent Sensitivities**: Neurodivergent traits, such as
            those associated with ADHD, autism, or other cognitive differences,
            can significantly impact emotional processing and social
            interactions. You may find it particularly challenging to understand
            or regulate emotions due to sensory sensitivities, executive
            functioning issues, or social communication differences. Recognizing
            these factors as valid aspects of your experience is crucial, and
            seeking tailored strategies, such as structured routines or
            sensory-friendly environments, can be beneficial.
          </li>
          <li className="pt-4">
            - **Mental Health Awareness**: Mental health conditions like
            anxiety, depression, or trauma can greatly influence your emotional
            regulation. You might find yourself caught in cycles of negative
            thinking or emotional overwhelm, making it difficult to maintain
            composure or positive connections. Acknowledging the impact of
            mental health on your emotional intelligence and seeking
            professional support or therapeutic interventions can provide you
            with tools to better manage these challenges.
          </li>
          <li className="pt-4">
            - **Impact of Past Trauma**: Past traumas can significantly shape
            your emotional responses, often making certain situations or
            interactions feel particularly triggering. You might experience
            heightened sensitivity or emotional reactions that seem
            disproportionate to the moment. Trauma-informed practices, such as
            grounding techniques or working with a therapist, can help you
            manage these emotional responses and build a sense of safety and
            control.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Areas for Continued Growth:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Building Emotional Awareness**: Start by taking small steps to
            identify your emotions, such as naming what you feel or keeping a
            journal of your daily emotional experiences. Understanding your
            emotional landscape is the first step in gaining control over how
            you respond.
          </li>
          <li className="pt-4">
            - **Developing Basic Self-Regulation Skills**: Simple strategies
            like pausing before responding, engaging in physical activity, or
            practicing breathing exercises can help you begin to manage
            overwhelming emotions. Over time, these skills can help you feel
            more in control of your reactions.
          </li>
          <li className="pt-4">
            - **Enhancing Empathy and Social Skills**: Practice being present in
            conversations and actively listening without interrupting. Showing
            genuine curiosity about others’ feelings and experiences can help
            you build stronger connections and develop a deeper understanding of
            social cues.
          </li>
          <li className="pt-4">
            - **Strengthening Communication and Conflict Resolution**: Learning
            to express your feelings calmly and clearly, and to listen without
            immediately reacting defensively, can improve your ability to manage
            interpersonal conflicts. Consider seeking resources like
            communication workshops or support groups to practice these skills
            in a safe environment.
          </li>
          <li className="pt-4">
            - **Building Resilience and Coping Strategies**: Focus on developing
            coping strategies that help you handle stress, such as setting
            achievable goals, breaking tasks into manageable steps, and
            celebrating small victories. Building resilience is a gradual
            process, and each small step forward is progress.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Conclusion:**
        </h2>
        <p>
          Your score suggests that while emotional intelligence may not come
          naturally, it is an area where meaningful improvement is possible. By
          focusing on small, manageable steps towards greater emotional
          awareness, self-regulation, and social connection, you can enhance
          your emotional intelligence over time. Remember, emotional skills are
          learned and can be developed with patience, practice, and support.
          Embracing your journey with self-compassion and seeking resources
          tailored to your unique needs will empower you to make positive
          changes in your emotional well-being and relationships.
        </p>
      </div>
    );
  } else if (total >= 120 && total < 180) {
    totalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-center text-[26px] font-bold py-10">**Result:**</h1>{" "}
        <p>
          Your score falls within the Moderate Emotional Intelligence category,
          indicating that you have a foundational awareness of your emotions and
          some ability to manage them. You often understand your feelings and
          can relate to others, but there are times when emotional regulation,
          stress management, and empathy can be challenging. This profile
          highlights your existing emotional skills and provides insights into
          areas where continued development could help you achieve greater
          emotional balance and interpersonal success.
        </p>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Awareness of Neurodivergence and Mental Health Considerations:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Neurodivergent Sensitivities**: You recognize that
            neurodivergent traits, such as those associated with ADHD, autism,
            or other cognitive differences, can influence how emotions are
            processed and expressed. You may sometimes feel uncertain about how
            to navigate these dynamics in yourself or others. Increasing your
            understanding of neurodivergent experiences and how they impact
            emotional regulation can foster more inclusive and supportive
            interactions.
          </li>
          <li className="pt-4">
            - **Mental Health Awareness**: You are aware that mental health
            conditions like anxiety, depression, or PTSD can affect emotional
            responses and self-regulation. There may be times when mental health
            challenges interfere with your emotional intelligence, making it
            harder to stay calm or connect with others. Acknowledging these
            influences without judgment and seeking appropriate support or
            coping strategies can help you maintain your emotional balance.
          </li>
          <li className="pt-4">
            - **Impact of Past Trauma**: Past traumas may occasionally influence
            your current emotional reactions, sometimes leading to heightened
            sensitivity or difficulty in managing certain emotions. Triggers may
            arise unexpectedly, impacting your ability to remain composed.
            Developing trauma-informed coping mechanisms, such as grounding
            techniques or working with a therapist, can assist in managing these
            emotional responses more effectively.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Areas for Continued Growth:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Improving Emotional Regulation**: Focus on building a toolkit of
            techniques to manage your emotions, particularly during moments of
            stress or conflict. This could include journaling, mindfulness
            exercises, or learning to pause and reflect before responding
            emotionally.
          </li>
          <li className="pt-4">
            - **Enhancing Empathy and Social Skills**: Actively practice empathy
            by putting yourself in others' shoes and listening without judgment.
            Engaging in activities that expose you to diverse perspectives can
            help broaden your understanding of emotional experiences different
            from your own.
          </li>
          <li className="pt-4">
            - **Strengthening Communication and Conflict Resolution**: Improving
            your ability to express your emotions clearly and manage conflicts
            constructively can greatly enhance your relationship management
            skills. Consider learning assertive communication techniques or
            participating in workshops that focus on conflict resolution.
          </li>
          <li className="pt-4">
            - **Fostering Resilience and Adaptability**: Develop routines and
            habits that support emotional resilience, such as setting achievable
            goals, maintaining a healthy lifestyle, and seeking support when
            needed. Building your adaptability skills can help you respond more
            positively to changes and setbacks.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Conclusion:**
        </h2>
        <p>
          Your moderate level of emotional intelligence suggests that you are on
          a journey of emotional growth, with strengths in basic awareness and
          empathy. By focusing on enhancing your emotional regulation,
          communication skills, and resilience, you can build on your existing
          foundation and develop greater emotional insight and stability.
          Remember that emotional intelligence is a skill that can be nurtured,
          and with continued practice and self-compassion, you can achieve
          significant progress in your emotional well-being and interpersonal
          effectiveness.
        </p>
      </div>
    );
  } else if (total >= 180 && total < 240) {
    totalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-center text-[26px] font-bold py-10">**Result:**</h1>{" "}
        <p>
          Your score places you in the Emotionally Intelligent category,
          indicating that you have a strong grasp of your emotions and are
          generally effective at managing them. You demonstrate empathy,
          communicate well, and usually handle stress and conflict in a balanced
          manner. While you have a solid foundation in emotional intelligence,
          there are occasional areas where emotional regulation and awareness
          may pose challenges. This profile highlights your strengths while
          acknowledging opportunities for growth, particularly in maintaining
          consistency under pressure.
        </p>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Awareness of Neurodivergence and Mental Health Considerations:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Neurodivergent Sensitivities**: You are aware that
            neurodivergence, such as ADHD, autism, or other cognitive
            variations, can affect emotional processing and social interactions.
            You recognize that these differences can influence how emotions are
            expressed and perceived, and you are generally adaptable in
            accommodating varying needs. Enhancing your understanding of
            neurodivergent experiences can help you deepen your empathy and
            improve your interactions.
          </li>
          <li className="pt-4">
            - **Mental Health Awareness**: You acknowledge that factors like
            anxiety, depression, or other mental health conditions can affect
            emotional regulation. You strive to be compassionate with yourself
            and others, recognizing that emotional ups and downs are part of the
            human experience. Maintaining awareness of your own mental health
            and seeking support when needed can bolster your emotional
            resilience.
          </li>
          <li className="pt-4">
            - **Impact of Past Trauma**: You understand that past traumas can
            shape emotional responses and may lead to heightened sensitivity in
            certain situations. You are mindful of your own triggers and are
            considerate of others’ experiences. However, there may be times when
            emotional memories resurface unexpectedly, impacting your current
            state. Engaging in practices that promote emotional healing, such as
            therapy or mindfulness, can help you manage these moments more
            effectively.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Areas for Continued Growth:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Consistency in Emotional Regulation**: While you manage emotions
            well most of the time, focusing on consistency, especially under
            pressure, will enhance your overall EQ. Techniques such as breathing
            exercises, journaling, or grounding practices can help you stay
            centered when emotions threaten to overwhelm.
          </li>
          <li className="pt-4">
            - **Deepening Empathy and Social Awareness**: You already possess
            strong empathy skills, but continuing to actively listen and seek to
            understand others’ perspectives, especially those different from
            your own, will further strengthen your connections. Learning more
            about diverse emotional experiences, including those related to
            neurodivergence and mental health, can broaden your empathy.
          </li>
          <li className="pt-4">
            - **Self-Care and Emotional Boundaries**: Ensuring that you
            prioritize self-care and set healthy emotional boundaries is key to
            maintaining your emotional intelligence. Balancing your own needs
            with your empathetic nature will help prevent burnout and allow you
            to sustain your supportive role in relationships.
          </li>
          <li className="pt-4">
            - **Developing Coping Mechanisms**: Building a toolkit of coping
            mechanisms for stress and emotional turbulence will support your
            ongoing growth. Consider exploring techniques like
            cognitive-behavioral strategies, relaxation techniques, or creative
            outlets that allow you to process emotions constructively.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Conclusion:**
        </h2>
        <p>
          Your score reflects a commendable level of emotional intelligence,
          with strengths in self-awareness, empathy, and relationship
          management. By continuing to build on these areas and addressing
          occasional challenges in emotional regulation, you can further enhance
          your emotional resilience and interpersonal effectiveness. Remember
          that emotional intelligence is a journey, and embracing both your
          strengths and areas for growth will empower you to navigate your
          emotions and relationships with increasing confidence and compassion.
        </p>
      </div>
    );
  } else {
    totalReturn = (
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-center text-[26px] font-bold py-10">**Result:**</h1>{" "}
        <p>
          You scored in the highest range, indicating that you possess a high
          level of emotional intelligence. You demonstrate exceptional
          self-awareness, empathy, and emotional regulation. Your ability to
          understand and manage your own emotions, as well as recognize and
          respond to the emotions of others, sets you apart in both personal and
          professional settings. You are often seen as a calm, empathetic, and
          effective communicator who can navigate complex social dynamics with
          ease.
        </p>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Awareness of Neurodivergence and Mental Health Considerations:**
        </h2>
        <ul>
          <li className="pt-4">
            - **Neurodivergent Sensitivities**: Your high emotional intelligence
            includes an awareness of how neurodivergence (such as ADHD, autism,
            or other cognitive differences) can shape emotional experiences. You
            are mindful that sensory sensitivities, social dynamics, or
            communication styles can vary, and you adapt your approach to ensure
            inclusivity and understanding in your interactions.
          </li>
          <li className="pt-4">
            - **Mental Health Awareness**: You recognize that emotional
            intelligence does not equate to always being positive or never
            experiencing emotional challenges. You are compassionate toward
            yourself and others regarding the impacts of mental health
            conditions such as anxiety, depression, or past trauma. Your EQ
            allows you to navigate these nuances without judgment, offering
            support and creating safe spaces for emotional expression.
          </li>
          <li className="pt-4">
            - **Impact of Past Trauma**: You understand that past experiences,
            including trauma, can influence emotional reactions. You are
            sensitive to triggers and careful not to impose unrealistic
            expectations of emotional regulation on yourself or others. Your
            awareness of these factors makes you a considerate and supportive
            presence, especially for those who may struggle with emotional
            vulnerabilities.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Areas for Continued Growth:**
        </h2>
        <ul>
          <li className="pt-4">
            - While your emotional intelligence is high, remember that
            maintaining it involves ongoing self-reflection and learning.
            Emotional intelligence is dynamic, and life experiences can shift
            emotional needs and responses over time. Regular self-care, seeking
            feedback, and engaging in mindful practices can help you sustain
            your EQ levels.
          </li>
          <li className="pt-4">
            - Be aware that despite your strong emotional skills, you are not
            immune to burnout or emotional fatigue, especially when frequently
            supporting others. Ensuring you set healthy boundaries and engage in
            activities that recharge your emotional energy is crucial.
          </li>
          <li className="pt-4">
            - Continue to be open to learning about how neurodivergence and
            mental health factors impact emotional expression and regulation.
            This awareness not only enhances your interactions but also broadens
            your empathy and understanding in diverse settings.
          </li>
        </ul>
        <h2 className="text-[20px] font-bold py-6 pt-10 text-center">
          **Conclusion:**
        </h2>
        <p>
          Your high level of emotional intelligence equips you with powerful
          tools for both personal fulfillment and professional success. Your
          awareness, empathy, and adaptability are invaluable, allowing you to
          positively influence those around you. Continue nurturing these
          strengths, and remember that your emotional well-being is as important
          as the support you offer to others.
        </p>
      </div>
    );
  }

  return {
    emotionalReturn,
    selfReturn,
    socialReturn,
    relationshipReturn,
    adaptableReturn,
    totalReturn,
  };
};
