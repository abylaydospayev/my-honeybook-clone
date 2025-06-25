import { Card } from '../ui/card';

export function Footer() {
  return (
    <footer className="p-4 md:p-8 bg-gray-100">
      <Card className="p-8 border-gray-200/80">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h3 className="font-bold">BULLE CONSULTING</h3>
            <p className="mt-2 text-sm text-gray-500">© 2025 Bulle Consulting. All rights reserved.</p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">LinkedIn</a>
          </div>
        </div>
      </Card>
    </footer>
  );
}