

    export type Spec = {
        key: string;
        val: string[];
    }

    export type Specification = {
        title: string;
        specs: Spec[];
    }

    export type PhoneDetails = {
        brand: string;
        phone_name: string;
        thumbnail: string;
        phone_images: string[];
        release_date: string;
        dimension: string;
        os: string;
        storage: string;
        specifications: Specification[];
    }

    export type PhoneDetailsResponse = {
        status: boolean;
        data: PhoneDetails;
    }