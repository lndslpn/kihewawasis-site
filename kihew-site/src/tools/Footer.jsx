import '../index.css';

export default function Footer() {

  return (
    <footer className="bg-footer py-6">
        <div className="container mx-auto px-6 text-center bg-footer">
            <p className="text-sm text-deeppurple">
            Copyright &copy; {new Date().getFullYear()} Kihew Awasis Wakamik. All rights reserved.
            </p>
        </div>
    </footer>
  );
}