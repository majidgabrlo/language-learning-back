import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import User from "../../models/User";

interface SignupArgs {
  credentials: {
    email: string;
    password: string;
  };
  name: string;
  bio: string;
}

interface SigninArgs {
  credentials: {
    email: string;
    password: string;
  };
}

interface UserPayload {
  userErrors: {
    message: string;
  }[];
  token: string | null;
}

const JSON_SIGNATURE = "5f4s6df@@KGsdf$%&^$#fnCV454ddgSSS";

export const Mutation = {
  signup: async (_: any, { credentials, name }: SignupArgs): Promise<any> => {
    const { email, password } = credentials;

    const isEmail = validator.isEmail(email);

    if (!isEmail) {
      return {
        userErrors: [
          {
            message: "Invalid email",
          },
        ],
        token: null,
      };
    }

    const isValidPassword = validator.isLength(password, {
      min: 5,
    });

    if (!isValidPassword) {
      return {
        userErrors: [
          {
            message: "Invalid password",
          },
        ],
        token: null,
      };
    }

    if (!name) {
      return {
        userErrors: [
          {
            message: "Invalid name",
          },
        ],
        token: null,
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createNewUser = new User({
      name,
      email: credentials.email,
      password: hashedPassword,
    });
    const res = await createNewUser.save();

    return {
      userErrors: [],
      token: JWT.sign(
        {
          userId: res._id,
        },
        JSON_SIGNATURE,
        {
          expiresIn: 3600000,
        }
      ),
    };
  },
  signin: async (_: any, { credentials }: SigninArgs): Promise<UserPayload> => {
    const { email, password } = credentials;

    const user = await User.findOne({ email });

    if (!user) {
      return {
        userErrors: [{ message: "Invalid credentials" }],
        token: null,
      };
    }

    const isMatch = await bcrypt.compare(password, user?.password as string);

    if (!isMatch) {
      return {
        userErrors: [{ message: "Invalid credentials" }],
        token: null,
      };
    }

    return {
      userErrors: [],
      token: JWT.sign({ userId: user.id }, JSON_SIGNATURE, {
        expiresIn: 3600000,
      }),
    };
  },
};
