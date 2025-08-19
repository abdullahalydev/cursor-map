# Cursor Map Game 🎯

A real-time multiplayer web experience where players' cursors are visible to everyone else on the map. Watch as cursors from around the world move, interact, and create a living, breathing digital space.

## ✨ Features

- **Real-time Cursor Tracking**: See other players' cursors moving in real-time
- **Multiplayer Experience**: Join a shared digital space with players worldwide
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Live Player Count**: See how many people are currently online
- **Smooth Animations**: Fluid cursor movements with optimized performance

## 🚀 Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) with TypeScript
- **Backend**: [Supabase](https://supabase.com/) for real-time database and subscriptions
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdullahalydev/cursor-map.git
   cd cursor-map
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 How It Works

1. **Join the Game**: Simply visit the website - no sign-up required
2. **Move Your Cursor**: Your cursor position is tracked and shared with other players
3. **See Others**: Watch as other players' cursors appear and move around the map
4. **Real-time Updates**: Everything happens in real-time using Supabase's real-time subscriptions


## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

1. **Report Bugs**: Open an issue describing the problem
2. **Suggest Features**: Share ideas for new functionality
3. **Submit PRs**: Fix bugs or implement new features
4. **Improve Docs**: Help make the documentation better

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Supabase](https://supabase.com) for providing an amazing real-time database
- [Next.js](https://nextjs.org) for the fantastic React framework
- [Vercel](https://vercel.com) for seamless deployment
- The open-source community for inspiration and tools

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/abdullahalydev/cursor-map/issues)
- **Discussions**: [GitHub Discussions](https://github.com/abdullahalydev/cursor-map/discussions)

---

**Live Demo**: [cursor-map.vercel.app](https://cursor-map.vercel.app)

Made with ❤️ by [Abdullah Aly](https://github.com/abdullahalydev)