import React, { ReactElement } from 'react';

import Header from 'components/Header/Header';

import shawarmaImg from '../../../../assets/images/shawarma.jpg';
import timeImg from '../../../../assets/images/time.png';

import styles from './Shawarma.module.scss';

const Shawarma = (): ReactElement => {
  return (
    <div className={styles.infoPage}>
      <Header />
      <div className="container">
        <div className={styles.title}>
          <p>Recipe shawarma</p>
        </div>

        <div className={styles.mainContainer}>
          <img className={styles.mainImg} src={shawarmaImg} alt="shawarma" />
          <div className={styles.subInfo}>
            <img src={timeImg} alt="time" />
            <p className={styles.subInfoTitle}>
              Cooking time: <b>15 minutes</b>
            </p>
          </div>

          <div className={styles.ingredients}>
            <p className={styles.ingredientsTitle}>Ingredients</p>
            <div className={styles.ingredientsItems}>
              <p>
                &bull; <b>1</b> chicken fillet
              </p>
              <p>
                &bull; <b>1</b> pita
              </p>
              <p>
                &bull; <b>100</b> gr of cheese
              </p>
              <p>
                &bull; <b>100</b> gr of salad mix (carrot and cabbage)
              </p>
              <p>
                &bull; <b>1</b> cucumber
              </p>
              <p>
                &bull; <b>1</b> tomato
              </p>
              <p>
                &bull; <b>1</b> tablespoon of mayonnaise
              </p>
              <p>
                &bull; <b>2</b> tablespoon of garlic sause
              </p>
              <p>
                &bull; <b>1</b> green onion
              </p>
              <p>
                &bull; <b>2</b> gr of seasoning prymat karkowka grill
              </p>
              <p>
                &bull; <b>40</b> ml of vegetable oil
              </p>
            </div>
          </div>

          <div className={styles.cooking}>
            <p className={styles.cookingTitle}>Cooking</p>
            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>1</p>
              <p>
                Chicken fillet cut into large pieces. Take a bowl and put the chicken in it, add
                salt and seasonings. Then add vegetable oil and mix all.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>2</p>
              <p>
                Cook our sauce. Take the new bowl, add garlic sauce and mayonnaise, then add green
                onion. Mix all and our sauce is ready!
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>3</p>
              <p>Take cucumber and tomato. Cut vegetables into thin slices.</p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>4</p>
              <p>The next step is to take grater for our cheese. Grate cheese on a fine grater.</p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>5</p>
              <p>
                Heat the pan and add some vegetable oil. And put all pieces of chicken to this pan.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>6</p>
              <p>
                We fry our chicken until a crust appears. Then close our pan with a lid (to keep the
                chicken juicy).
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>7</p>
              <p>Now we need to take our pita bread and grease them with our sauce.</p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>8</p>
              <p>
                Then we should cut our fry chicken into small pieces like in shawarmas-shop. And we
                put our chicken on pita bread.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>9</p>
              <p>
                After the chicken, add our chopped salad. Then add the chopped cucumber and tomato.
                Then put our grated cheese.
              </p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>10</p>
              <p>The final step is to spin our delicious shawarma and fry it a little.</p>
            </div>

            <div className={styles.cookingSteps}>
              <p className={styles.cookingStep}>11</p>
              <p>
                Our shawarma is ready! Now we can add some of our sauce on top of shawarma and eat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shawarma;
