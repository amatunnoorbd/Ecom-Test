import CategoryPage from '@/components/Shared/CategoryPage';

// import image
import card_1 from '../../../components/Image/bestselling/card_1.jpeg';
import card_11 from '../../../components/Image/bestselling/card_1(2).jpeg';
import card_2 from '../../../components/Image/bestselling/card_2.jpeg';
import card_22 from '../../../components/Image/bestselling/card_2(2).jpeg';
import card_3 from '../../../components/Image/bestselling/card_3.jpeg';
import card_33 from '../../../components/Image/bestselling/card_3(3).jpeg';
import card_4 from '../../../components/Image/bestselling/card_4.jpeg';
import card_44 from '../../../components/Image/bestselling/card_4(4).jpeg';
import card_5 from '../../../components/Image/bestselling/card_5.jpeg';
import card_55 from '../../../components/Image/bestselling/card_5(5).jpeg';
import card_6 from '../../../components/Image/bestselling/card_6.jpeg';
import card_66 from '../../../components/Image/bestselling/card_6(6).jpeg';
import category_1 from '../../../components/Image/category_1.jpeg';
import category_2 from '../../../components/Image/category_2.jpeg';

const items = [
    {
        imge1: card_1,
        image2: card_11,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_2,
        image2: card_22,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_3,
        image2: card_33,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_3,
        image2: card_33,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_3,
        image2: card_33,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_4,
        image2: card_44,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_5,
        image2: card_55,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: card_6,
        image2: card_66,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
    {
        imge1: category_1,
        image2: category_2,
        title: "Summer Denim Shirts for Men | MS-11",
        discount_price: "900",
        original_price: "1400"
    },
];


const WinterPage = () => {
    return (
        <div>
            <CategoryPage items={items}/>
        </div>
    );
};

export default WinterPage;