import {Stripe, loadStripe} from "@stripe/stripe-js";

let stripePromise =  Stripe | null;

const initializeStripe = async () => {
    if (!stripePromise) {
        stripePromise = await loadStripe(
            "pk_test_51KXpEzHFkISLQ6UVLAk7eAnoKjDOU1pzTPgpT3kFippFtur2VRnmruVqNJdMQW7xuPcKRHJx206ywO7WTMlOvng100M1AxSBa9"
        );
    }

    return stripePromise;
};


export default initializeStripe;